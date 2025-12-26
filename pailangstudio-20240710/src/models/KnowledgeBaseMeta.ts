// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBaseMetaChunkAttachment extends $dara.Model {
  downloadUrl?: string;
  placeholderId?: string;
  type?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      placeholderId: 'PlaceholderId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      placeholderId: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseMetaMetaData extends $dara.Model {
  fileMetaId?: string;
  fileName?: string;
  fileUri?: string;
  static names(): { [key: string]: string } {
    return {
      fileMetaId: 'FileMetaId',
      fileName: 'FileName',
      fileUri: 'FileUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileMetaId: 'string',
      fileName: 'string',
      fileUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseMeta extends $dara.Model {
  chunkAttachment?: KnowledgeBaseMetaChunkAttachment[];
  chunkContent?: string;
  chunkEnd?: number;
  chunkId?: string;
  chunkSequence?: number;
  chunkSize?: number;
  chunkStart?: number;
  chunkStatus?: string;
  downloadUrl?: string;
  fileContentType?: string;
  fileCreateTime?: string;
  fileMetaData?: string;
  fileMetaId?: string;
  fileName?: string;
  fileSize?: number;
  fileStatus?: string;
  fileType?: string;
  fileUpdateTime?: string;
  fileUri?: string;
  metaData?: KnowledgeBaseMetaMetaData;
  thumbnailUrl?: string;
  static names(): { [key: string]: string } {
    return {
      chunkAttachment: 'ChunkAttachment',
      chunkContent: 'ChunkContent',
      chunkEnd: 'ChunkEnd',
      chunkId: 'ChunkId',
      chunkSequence: 'ChunkSequence',
      chunkSize: 'ChunkSize',
      chunkStart: 'ChunkStart',
      chunkStatus: 'ChunkStatus',
      downloadUrl: 'DownloadUrl',
      fileContentType: 'FileContentType',
      fileCreateTime: 'FileCreateTime',
      fileMetaData: 'FileMetaData',
      fileMetaId: 'FileMetaId',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      fileUri: 'FileUri',
      metaData: 'MetaData',
      thumbnailUrl: 'ThumbnailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkAttachment: { 'type': 'array', 'itemType': KnowledgeBaseMetaChunkAttachment },
      chunkContent: 'string',
      chunkEnd: 'number',
      chunkId: 'string',
      chunkSequence: 'number',
      chunkSize: 'number',
      chunkStart: 'number',
      chunkStatus: 'string',
      downloadUrl: 'string',
      fileContentType: 'string',
      fileCreateTime: 'string',
      fileMetaData: 'string',
      fileMetaId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileStatus: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      fileUri: 'string',
      metaData: KnowledgeBaseMetaMetaData,
      thumbnailUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunkAttachment)) {
      $dara.Model.validateArray(this.chunkAttachment);
    }
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

