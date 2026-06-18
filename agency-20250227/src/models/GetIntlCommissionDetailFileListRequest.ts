// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntlCommissionDetailFileListRequest extends $dara.Model {
  /**
   * @remarks
   * The billing month.
   * 
   * This parameter is required.
   * 
   * @example
   * 202502
   */
  billMonth?: string;
  /**
   * @remarks
   * The AccessKey ID used to upload files to OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAccessKeyID
   */
  ossAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret used to upload files to OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAccessKeySecret
   */
  ossAccessKeySecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * yourBucketName
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The endpoint of the region where the Object Storage Service (OSS) bucket for the file sharing resides.
   * 
   * This parameter is required.
   * 
   * @example
   * http://oss-cn-beijing.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The region where the current OSS bucket resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegion?: string;
  /**
   * @remarks
   * The STS token used to upload files to OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * yourSecurityToken
   */
  ossSecurityToken?: string;
  static names(): { [key: string]: string } {
    return {
      billMonth: 'BillMonth',
      ossAccessKeyId: 'OssAccessKeyId',
      ossAccessKeySecret: 'OssAccessKeySecret',
      ossBucketName: 'OssBucketName',
      ossEndpoint: 'OssEndpoint',
      ossRegion: 'OssRegion',
      ossSecurityToken: 'OssSecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billMonth: 'string',
      ossAccessKeyId: 'string',
      ossAccessKeySecret: 'string',
      ossBucketName: 'string',
      ossEndpoint: 'string',
      ossRegion: 'string',
      ossSecurityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

