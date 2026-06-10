// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppMaterialFile extends $dara.Model {
  /**
   * @remarks
   * Application instance ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Content Type
   * 
   * @example
   * image/png
   */
  contentType?: string;
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 2025-11-03 02:05:01
   */
  createTime?: string;
  /**
   * @remarks
   * Deletion Time
   * 
   * @example
   * 2025-11-03 02:05:01
   */
  deletedTime?: string;
  /**
   * @remarks
   * Folder ID
   * 
   * @example
   * ddddwww
   */
  directoryId?: string;
  /**
   * @remarks
   * File ID
   * 
   * @example
   * d75e1e9693cc460da218419d67735567
   */
  fileId?: string;
  /**
   * @remarks
   * File URL
   * 
   * @example
   * https://demo-moshicloud-test.oss-cn-hangzhou-internal.aliyuncs.com/document/testcase/aliyun/api_case/pdf_angle90_page1.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * Image height
   * 
   * @example
   * 1280
   */
  height?: number;
  /**
   * @remarks
   * File name
   * 
   * @example
   * 文件名
   */
  name?: string;
  /**
   * @remarks
   * File Status
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * Bucket size.
   * 
   * @example
   * 23M
   */
  storageSize?: string;
  /**
   * @remarks
   * File suffix
   * 
   * @example
   * png
   */
  suffix?: string;
  /**
   * @remarks
   * File Type
   * 
   * @example
   * IMAGE
   */
  type?: string;
  /**
   * @remarks
   * Image width
   * 
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

