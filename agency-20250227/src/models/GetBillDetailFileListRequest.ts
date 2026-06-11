// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillDetailFileListRequest extends $dara.Model {
  /**
   * @remarks
   * Month
   * 
   * This parameter is required.
   * 
   * @example
   * 202502
   */
  billMonth?: string;
  /**
   * @remarks
   * The AccessKeyID used to upload files to OSS.
   * 
   * @example
   * yourAccessKeyID
   */
  ossAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKeySecret used to upload files to OSS.
   * 
   * @example
   * yourAccessKeySecret
   */
  ossAccessKeySecret?: string;
  /**
   * @remarks
   * OSS bucket.
   * 
   * @example
   * yourBucketName
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The Region of the edge zone where the OSS bucket corresponding to the file sharing is located.
   * 
   * @example
   * http://oss-cn-beijing.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The Region to which the current OSS bucket belongs.
   * 
   * @example
   * cn-beijing
   */
  ossRegion?: string;
  /**
   * @remarks
   * STS token used to upload files to OSS
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

