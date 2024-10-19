export interface UrlNameImg {
    imgName: string;
    name: string
}

export interface Icon {
    name: string;
    attr: string;
}

export interface HeaderButtons {
    name: string;
    isActive: boolean;
}

export interface Portfolio {
    about:        About[];
    experiencies: Experience[];
    projects:     Project[];
}

export interface About {
    id?:          number;
    description: string;
    languages:   Language[];
}

export interface Language {
    img_name: string;
    name:     string;
}

export interface Experience {
    id:           number;
    start_date:   string;
    end_date:     string;
    role:         string;
    company:      string;
    description:  string;
    technologies: string;
}

export interface Project {
    id:           number;
    name:         string;
    description:  string;
    technologies: string;
    imageUrl:     string;
}
