// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaContentCreate extends $dara.Model {
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contentType?: string;
  dataSize?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileFingerPrint?: string;
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileUpdateTime?: string;
  metaAttributes?: string;
  /**
   * @example
   * {"user":{"add":["cat"]}}
   */
  tags?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contentType: 'ContentType',
      dataSize: 'DataSize',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      tags: 'Tags',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentType: 'string',
      dataSize: 'number',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      tags: 'string',
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

