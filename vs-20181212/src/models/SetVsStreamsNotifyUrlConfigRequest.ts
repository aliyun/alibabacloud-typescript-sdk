// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVsStreamsNotifyUrlConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The primary key associated with the playback domain name. This key generates authenticated URLs.
   * 
   * > Call the [DescribeVsDomainConfigs](https://help.aliyun.com/document_detail/464513.html) operation to query the AuthKey value.
   * 
   * @example
   * ocs*****ace
   */
  authKey?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * - **no_auth** (disabled)
   * 
   * - **type_a** (method A)
   * 
   * - **type_b** (method B)
   * 
   * - **type_c** (method C)
   * 
   * @example
   * type_a
   */
  authType?: string;
  /**
   * @remarks
   * Your accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The URL to which live stream information is pushed.
   * 
   * > This URL must start with http\\:// or https\\://.
   * 
   * This parameter is required.
   * 
   * @example
   * http://xxx.com/xx
   */
  notifyUrl?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authType: 'AuthType',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authType: 'string',
      domainName: 'string',
      notifyUrl: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

