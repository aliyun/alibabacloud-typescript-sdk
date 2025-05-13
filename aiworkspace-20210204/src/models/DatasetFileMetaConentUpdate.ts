// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaConentUpdate extends $dara.Model {
  comment?: string;
  contentType?: string;
  dataSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  fileFingerPrint?: string;
  fileName?: string;
  fileType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileUpdateTime?: string;
  metaAttributes?: string;
  semanticIndexJobId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  /**
   * @example
   * ● 执行算法打标更新（必须设置有效的TagJobId）： {    "ai":["车道线", "水马", "晴天"] } ● 用户手动打标：(add/remove表示对标签组内的标签进行增加/删除操作) 用户可操作的标签组为：   ○ user: 对单个元数据，用户自行添加的标签名列表。   ○ user-delete-ai-tags: 对单个元数据，算法标签组中用户需要删除的标签名列表。 {     "user":{         "add":["车道线","晴天"],         "remove":["水马"]     },     "user-delete-ai-tags":{         "add": ["地面阴影"],         "remove": []     } }
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contentType: 'ContentType',
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      semanticIndexJobId: 'SemanticIndexJobId',
      semanticIndexUpdateTime: 'SemanticIndexUpdateTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentType: 'string',
      dataSize: 'number',
      datasetFileMetaId: 'string',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      semanticIndexJobId: 'string',
      semanticIndexUpdateTime: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

