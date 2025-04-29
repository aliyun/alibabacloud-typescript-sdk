// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiGroupNetworkPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * b0162c75d7d34ff48506f1aff878b05e
   */
  groupId?: string;
  /**
   * @remarks
   * The HTTPS security policy.
   * 
   * @example
   * HTTPS1_1_TLS1_0
   */
  httpsPolicy?: string;
  /**
   * @remarks
   * Specifies whether to disable the public second-level domain name.
   * 
   * @example
   * true
   */
  innerDomainEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the virtual private cloud (VPC) second-level domain name.
   * 
   * @example
   * true
   */
  internetEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values: **true** and **false**.
   * 
   * @example
   * true
   */
  internetIPV6Enable?: boolean;
  securityToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the VPC domain name. Valid values:
   * 
   * *   TRUE
   * *   FALSE
   * 
   * @example
   * false
   */
  vpcIntranetEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the self-calling domain name.
   * 
   * @example
   * false
   */
  vpcSlbIntranetEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      httpsPolicy: 'HttpsPolicy',
      innerDomainEnable: 'InnerDomainEnable',
      internetEnable: 'InternetEnable',
      internetIPV6Enable: 'InternetIPV6Enable',
      securityToken: 'SecurityToken',
      vpcIntranetEnable: 'VpcIntranetEnable',
      vpcSlbIntranetEnable: 'VpcSlbIntranetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      httpsPolicy: 'string',
      innerDomainEnable: 'boolean',
      internetEnable: 'boolean',
      internetIPV6Enable: 'boolean',
      securityToken: 'string',
      vpcIntranetEnable: 'boolean',
      vpcSlbIntranetEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

