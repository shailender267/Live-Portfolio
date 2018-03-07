export interface IProjects {
    id: number,
    name: string,
    role: string,
    content: string,
    activities: string[],
    images: IImages[],
    link: string,
    moreDetails: string
}
export interface IImages {
    url: string,
    title: string,
    caption: string
}

