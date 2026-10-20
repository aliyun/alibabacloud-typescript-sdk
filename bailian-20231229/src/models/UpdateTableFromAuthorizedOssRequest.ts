// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableFromAuthorizedOssRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket. For more information, see [Buckets](https://help.aliyun.com/document_detail/177682.html). The target bucket must have the tag key `bailian-datahub-access` and tag value `read` added.
   * 
   * This parameter is required.
   * 
   * @example
   * yinghuo-ai
   */
  ossBucket?: string;
  /**
   * @remarks
   * The key of the file to import in the OSS bucket. For more information, see [Object naming](https://help.aliyun.com/document_detail/273129.html).
   * 
   * This parameter is required.
   * 
   * @example
   * a0deedbce4a8162b8d66c63ace28330c
   */
  ossKey?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket. For more information, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegionId?: string;
  /**
   * @remarks
   * The update mode. Valid values:
   * - OVERWRITE: overwrites existing data.
   * - APPEND: appends data to existing data.
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

