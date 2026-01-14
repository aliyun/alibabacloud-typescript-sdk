// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunksChunkAttachment extends $dara.Model {
  /**
   * @remarks
   * 下载地址
   * 
   * @example
   * https://mybucket.oss-cn-shanghai.aliyuncs.com/...
   */
  downloadUrl?: string;
  /**
   * @remarks
   * 占位符ID
   * 
   * @example
   * IMAGE_PLACEHOLDER_0
   */
  placeholderId?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * 路径
   * 
   * @example
   * oss://mybucket/path/file.txt
   */
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

export class ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunksMetaData extends $dara.Model {
  /**
   * @remarks
   * 文件元数据ID
   * 
   * @example
   * xd8e****79du
   */
  fileMetaId?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * file1.txt
   */
  fileName?: string;
  /**
   * @remarks
   * 文件地址
   * 
   * @example
   * oss://mybucketpath/file1.txt
   */
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

export class ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunks extends $dara.Model {
  /**
   * @remarks
   * 切片附属信息
   */
  chunkAttachment?: ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunksChunkAttachment[];
  /**
   * @remarks
   * 切片内容
   * 
   * @example
   * content
   */
  chunkContent?: string;
  /**
   * @remarks
   * 切片结束位置
   * 
   * @example
   * 30000
   */
  chunkEnd?: number;
  /**
   * @remarks
   * 切片顺序
   * 
   * @example
   * 1
   */
  chunkSequence?: number;
  /**
   * @remarks
   * 切片大小
   * 
   * @example
   * 1873
   */
  chunkSize?: number;
  /**
   * @remarks
   * 切片起始位置
   * 
   * @example
   * 0
   */
  chunkStart?: number;
  /**
   * @remarks
   * 切片状态
   * 
   * @example
   * Enable
   */
  chunkStatus?: string;
  /**
   * @remarks
   * 切片下载地址
   * 
   * @example
   * https://mybucket.oss-cn-shanghai.aliyuncs.com/...
   */
  downloadUrl?: string;
  /**
   * @remarks
   * 切片ID
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  knowledgeBaseChunkId?: string;
  /**
   * @remarks
   * 知识库ID
   * 
   * @example
   * d-ix****o9
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * 原始文件信息
   */
  metaData?: ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunksMetaData;
  /**
   * @remarks
   * 切片缩略图
   * 
   * @example
   * https://mybucket.oss-cn-shanghai.aliyuncs.com/...
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * 知识库版本
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      chunkAttachment: 'ChunkAttachment',
      chunkContent: 'ChunkContent',
      chunkEnd: 'ChunkEnd',
      chunkSequence: 'ChunkSequence',
      chunkSize: 'ChunkSize',
      chunkStart: 'ChunkStart',
      chunkStatus: 'ChunkStatus',
      downloadUrl: 'DownloadUrl',
      knowledgeBaseChunkId: 'KnowledgeBaseChunkId',
      knowledgeBaseId: 'KnowledgeBaseId',
      metaData: 'MetaData',
      thumbnailUrl: 'ThumbnailUrl',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkAttachment: { 'type': 'array', 'itemType': ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunksChunkAttachment },
      chunkContent: 'string',
      chunkEnd: 'number',
      chunkSequence: 'number',
      chunkSize: 'number',
      chunkStart: 'number',
      chunkStatus: 'string',
      downloadUrl: 'string',
      knowledgeBaseChunkId: 'string',
      knowledgeBaseId: 'string',
      metaData: ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunksMetaData,
      thumbnailUrl: 'string',
      versionName: 'string',
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

export class ListKnowledgeBaseChunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * 切片列表
   */
  knowledgeBaseChunks?: ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunks[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 963BD7F9-0C02-5594-9550-BCC6DD43E3C0
   */
  requestId?: string;
  /**
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseChunks: 'KnowledgeBaseChunks',
      maxResults: 'MaxResults',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseChunks: { 'type': 'array', 'itemType': ListKnowledgeBaseChunksResponseBodyKnowledgeBaseChunks },
      maxResults: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseChunks)) {
      $dara.Model.validateArray(this.knowledgeBaseChunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

