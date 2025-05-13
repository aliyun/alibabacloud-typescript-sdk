// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMeta extends $dara.Model {
  /**
   * @example
   * image/jpeg
   */
  contentType?: string;
  /**
   * @example
   * 12
   */
  dataSize?: number;
  datasetFileMetaId?: string;
  downloadUrl?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  fileFingerPrint?: string;
  /**
   * @example
   * car.png
   */
  fileName?: string;
  /**
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileUpdateTime?: string;
  /**
   * @example
   * {     "ImageHeight": 400,     "ImageWidth": 800 }
   */
  metaAttributes?: string;
  /**
   * @example
   * 0.6
   */
  score?: number;
  semanticIndexJobId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  tags?: string;
  thumbnailUrl?: string;
  /**
   * @example
   * oss://test-bucket/dataset/car.png
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      downloadUrl: 'DownloadUrl',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      score: 'Score',
      semanticIndexJobId: 'SemanticIndexJobId',
      semanticIndexUpdateTime: 'SemanticIndexUpdateTime',
      tags: 'Tags',
      thumbnailUrl: 'ThumbnailUrl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dataSize: 'number',
      datasetFileMetaId: 'string',
      downloadUrl: 'string',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      score: 'number',
      semanticIndexJobId: 'string',
      semanticIndexUpdateTime: 'string',
      tags: 'string',
      thumbnailUrl: 'string',
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

