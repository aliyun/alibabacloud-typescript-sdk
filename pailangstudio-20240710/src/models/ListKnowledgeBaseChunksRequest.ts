// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseChunksRequestMetaData extends $dara.Model {
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
   * 文件地址
   * 
   * @example
   * oss://mybucketpath/file1.txt
   */
  fileUri?: string;
  static names(): { [key: string]: string } {
    return {
      fileMetaId: 'FileMetaId',
      fileUri: 'FileUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileMetaId: 'string',
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

export class ListKnowledgeBaseChunksRequest extends $dara.Model {
  /**
   * @example
   * Enable
   */
  chunkStatus?: string;
  /**
   * @example
   * 1
   */
  metaData?: ListKnowledgeBaseChunksRequestMetaData;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      chunkStatus: 'ChunkStatus',
      metaData: 'MetaData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStatus: 'string',
      metaData: ListKnowledgeBaseChunksRequestMetaData,
      pageNumber: 'number',
      pageSize: 'number',
      versionName: 'string',
    };
  }

  validate() {
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

