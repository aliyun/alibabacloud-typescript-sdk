// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionDetailFileListRequest extends $dara.Model {
  /**
   * @remarks
   * The billing month.
   * 
   * @example
   * 202501
   */
  billMonth?: string;
  /**
   * @remarks
   * The AccessKey ID used to upload files to OSS.
   * 
   * @example
   * yourAccessKeyID
   */
  ossAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret used to upload files to OSS.
   * 
   * @example
   * yourAccessKeySecret
   */
  ossAccessKeySecret?: string;
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * @example
   * yourBucketName
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The endpoint of the region where the Object Storage Service (OSS) bucket corresponding to the file sharing resides.
   * 
   * @example
   * http://oss-cn-beijing.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The region where the OSS bucket resides.
   * 
   * @example
   * cn-beijing
   */
  ossRegion?: string;
  /**
   * @remarks
   * The STS token used to upload files to OSS.
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

