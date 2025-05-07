// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDatasetDocumentRequestDocumentMultimodalMedias extends $dara.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

