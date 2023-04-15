export interface IDeletedDocument {
    deletedCount: number,
}

export interface IDataSource {
    truncate: () => Promise<IDeletedDocument>,
}
