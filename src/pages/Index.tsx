import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedProject, setSelectedProject] = useState(null);

  const skills = [
    { name: 'JavaScript/TypeScript', icon: 'Code', level: 95 },
    { name: 'Node.js & Express', icon: 'Server', level: 90 },
    { name: 'React/SolidJS/NextJS', icon: 'Zap', level: 92 },
    { name: 'Java/MC Mods', icon: 'Coffee', level: 85 },
    { name: 'MySQL/Postgres', icon: 'Database', level: 88 },
    { name: 'Redis/SurrealDB', icon: 'Layers', level: 82 },
    { name: 'Prisma/Drizzle/TypeORM', icon: 'GitBranch', level: 87 },
    { name: 'HTML/CSS', icon: 'Palette', level: 90 },
    { name: 'Tailwind/Bootstrap', icon: 'Paintbrush', level: 93 },
    { name: 'WebSockets/tRPC', icon: 'Wifi', level: 85 },
    { name: 'AI Development', icon: 'Brain', level: 80 }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Полнофункциональная платформа электронной коммерции с микросервисной архитектурой',
      status: 'Завершено',
      category: 'Сайт',
      link: 'https://example.com',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Discord Bot Framework',
      description: 'Мощный фреймворк для создания Discord ботов с поддержкой команд и событий',
      status: 'В работе',
      category: 'Бот',
      link: '',
      tech: ['TypeScript', 'Discord.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Minecraft Launcher',
      description: 'Кастомный лаунчер для Minecraft с поддержкой модов и текстур',
      status: 'Завершено',
      category: 'Лаунчер',
      link: 'https://github.com/example',
      tech: ['Java', 'JavaFX', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Telegram Analytics Bot',
      description: 'Бот для аналитики каналов и чатов с красивыми графиками и отчетами',
      status: 'В работе',
      category: 'Бот',
      link: '',
      tech: ['Python', 'Telegram API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'React Dashboard',
      description: 'Современная админ-панель с real-time данными и интерактивными графиками',
      status: 'Завершено',
      category: 'Сайт',
      link: 'https://dashboard.example.com',
      tech: ['React', 'TypeScript', 'Chart.js', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ];

  const categories = ['Все', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'Все' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900 to-slate-800">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            MrLeonardos
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Главная', 'Обо мне', 'Навыки', 'Проекты', 'Контакты'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="главная" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ 
                background: [
                  'radial-gradient(circle, rgba(155, 135, 245, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle, rgba(155, 135, 245, 0.3) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="w-40 h-40 mx-auto rounded-full mb-8 flex items-center justify-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl font-bold text-white animate-glow">
                IL
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Igor Serikov
              </span>
            </h1>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-6"
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              С 5-летним опытом программирования я успешно создаю веб-приложения, 
              ботов (Discord & Telegram) и кастомные программные решения
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать CV
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="обо-мне" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Обо мне
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Я - увлеченный разработчик с глубокими знаниями в области веб-технологий. 
              Специализируюсь на создании масштабируемых приложений и автоматизации процессов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="навыки" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Навыки
            </h2>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 mr-3 group-hover:bg-primary/20 transition-colors">
                        <Icon name={skill.icon} size={24} className="text-primary" />
                      </div>
                      <h3 className="font-semibold">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="проекты" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Проекты
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ознакомьтесь с некоторыми из моих последних работ
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={project.status === 'Завершено' ? 'default' : 'secondary'}
                        className={project.status === 'Завершено' ? 'bg-green-600' : 'bg-orange-600'}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {project.link && (
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        Посмотреть проект
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Готов к новым вызовам! Свяжитесь со мной для обсуждения проектов
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@igor.dev</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon name="MessageSquare" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telegram</h3>
                    <p className="text-muted-foreground">@mrleonardos</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon name="Github" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-muted-foreground">github.com/mrleonardos</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
};

export default Index;