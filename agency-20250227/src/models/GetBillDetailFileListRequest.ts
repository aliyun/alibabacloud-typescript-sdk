// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBillDetailFileListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 202502
   */
  billMonth?: string;
  ossAccessKeyId?: string;
  ossAccessKeySecret?: string;
  ossBucketName?: string;
  ossEndpoint?: string;
  ossRegion?: string;
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

