// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppMaterialFile extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * image/png
   */
  contentType?: string;
  /**
   * @example
   * 2025-11-03 02:05:01
   */
  createTime?: string;
  /**
   * @example
   * 2025-11-03 02:05:01
   */
  deletedTime?: string;
  /**
   * @example
   * ddddwww
   */
  directoryId?: string;
  /**
   * @example
   * d75e1e9693cc460da218419d67735567
   */
  fileId?: string;
  /**
   * @example
   * https://demo-moshicloud-test.oss-cn-hangzhou-internal.aliyuncs.com/document/testcase/aliyun/api_case/pdf_angle90_page1.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * 1280
   */
  height?: number;
  name?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @example
   * 23M
   */
  storageSize?: string;
  /**
   * @example
   * png
   */
  suffix?: string;
  /**
   * @example
   * IMAGE
   */
  type?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      directoryId: 'DirectoryId',
      fileId: 'FileId',
      fileUrl: 'FileUrl',
      height: 'Height',
      name: 'Name',
      status: 'Status',
      storageSize: 'StorageSize',
      suffix: 'Suffix',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      contentType: 'string',
      createTime: 'string',
      deletedTime: 'string',
      directoryId: 'string',
      fileId: 'string',
      fileUrl: 'string',
      height: 'number',
      name: 'string',
      status: 'string',
      storageSize: 'string',
      suffix: 'string',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

