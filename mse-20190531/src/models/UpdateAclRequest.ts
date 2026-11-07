// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The whitelist.
   * 
   * @example
   * 192.168.0.0/XX,192.168.0.0/XX
   */
  aclEntryList?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse-cn-78v1l83****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type to which the access control rule applies. Valid values: Public and Private.
   * 
   * @example
   * Public
   */
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

