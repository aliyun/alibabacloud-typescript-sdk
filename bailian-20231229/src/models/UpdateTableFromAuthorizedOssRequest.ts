// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableFromAuthorizedOssRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the OSS bucket. For details, see [bucket](https://help.aliyun.com/document_detail/177682.html).
   * 
   * This parameter is required.
   * 
   * @example
   * yinghuo-ai
   */
  ossBucket?: string;
  /**
   * @remarks
   * Object key of the file in the OSS bucket. For details, see [object naming](https://help.aliyun.com/document_detail/273129.html).
   * 
   * This parameter is required.
   * 
   * @example
   * a0deedbce4a8162b8d66c63ace28330c
   */
  ossKey?: string;
  /**
   * @remarks
   * Region ID of the OSS bucket. For details, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegionId?: string;
  /**
   * @remarks
   * Update mode. Valid values: APPEND and OVERWRITE.
   * 
   * This parameter is required.
   * 
   * @example
   * OVERWRITE
   */
  updateMode?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucket: 'OssBucket',
      ossKey: 'OssKey',
      ossRegionId: 'OssRegionId',
      updateMode: 'UpdateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucket: 'string',
      ossKey: 'string',
      ossRegionId: 'string',
      updateMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

