// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySlsDispatchStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the log category. Valid values:
   * 
   * **internet_log**
   * 
   * **vpc_firewall_log**
   * 
   * **nat_firewall_log**
   * 
   * **ipv6_firewall_log**
   * 
   * **dns_firewall_log**.
   * 
   * @example
   * internet_log
   */
  dispatchValue?: string;
  /**
   * @remarks
   * Specifies whether to deliver logs. A value of \\`true\\` enables delivery, and \\`false\\` disables it.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * The supported filter conditions. Valid values:
   * 
   * **attack**
   * 
   * **acl**
   * 
   * **other**.
   * 
   * @example
   * attack,acl
   */
  filterKeys?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shanghai
   */
  newRegionId?: string;
  /**
   * @remarks
   * The site to modify. If the log version is 1, leave this parameter empty or set it to \\`global\\`. If the log version is 2, set this parameter to \\`cn\\` or \\`intl\\`.
   * 
   * @example
   * cn
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchValue: 'DispatchValue',
      enableStatus: 'EnableStatus',
      filterKeys: 'FilterKeys',
      newRegionId: 'NewRegionId',
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchValue: 'string',
      enableStatus: 'boolean',
      filterKeys: 'string',
      newRegionId: 'string',
      site: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

