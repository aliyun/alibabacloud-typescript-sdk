// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommissionDetailFileListRequest extends $dara.Model {
  /**
   * @remarks
   * Billing month
   * 
   * @example
   * 202501
   */
  billMonth?: string;
  /**
   * @remarks
   * AccessKeyID used to upload files to OSS
   * 
   * @example
   * yourAccessKeyID
   */
  ossAccessKeyId?: string;
  /**
   * @remarks
   * AccessKeySecret used to upload files to OSS
   * 
   * @example
   * yourAccessKeySecret
   */
  ossAccessKeySecret?: string;
  /**
   * @remarks
   * OSS bucket
   * 
   * @example
   * yourBucketName
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Edge zone of the Region where the OSS bucket for file sharing is located
   * 
   * @example
   * http://oss-cn-beijing.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * Region to which the current OSS bucket belongs
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

