// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBaseFileChunkChunkAttachment extends $dara.Model {
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

export class KnowledgeBaseFileChunkMetaData extends $dara.Model {
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

export class KnowledgeBaseFileChunk extends $dara.Model {
  chunkAttachment?: KnowledgeBaseFileChunkChunkAttachment[];
  chunkContent?: string;
  chunkEnd?: number;
  chunkId?: string;
  chunkSequence?: number;
  chunkSize?: number;
  chunkStart?: number;
  chunkStatus?: string;
  downloadUrl?: string;
  metaData?: KnowledgeBaseFileChunkMetaData;
  score?: number;
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
      metaData: 'MetaData',
      score: 'Score',
      thumbnailUrl: 'ThumbnailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkAttachment: { 'type': 'array', 'itemType': KnowledgeBaseFileChunkChunkAttachment },
      chunkContent: 'string',
      chunkEnd: 'number',
      chunkId: 'string',
      chunkSequence: 'number',
      chunkSize: 'number',
      chunkStart: 'number',
      chunkStatus: 'string',
      downloadUrl: 'string',
      metaData: KnowledgeBaseFileChunkMetaData,
      score: 'number',
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

