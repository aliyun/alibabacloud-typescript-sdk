// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The IP addresses or CIDR blocks in the IP address whitelist.
   * 
   * @example
   * 192.168.0.0/XX,192.168.0.0/XX
   */
  aclEntryList?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-cn-78v1l83****
   */
  instanceId?: string;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      aclEntryList: 'AclEntryList',
      instanceId: 'InstanceId',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      aclEntryList: 'string',
      instanceId: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

