// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackTypeListResponseBodyAttackTypeList extends $dara.Model {
  /**
   * @remarks
   * The internationalization (i18n) translation key of the attack type, such as sas.attack.type.type12. The caller must resolve this key by using internationalization resources to obtain a human-readable attack type name.
   * 
   * @example
   * sas.attack.type.type12
   */
  label?: string;
  /**
   * @remarks
   * The attack source. Valid values:
   * 
   * - **cfw**: Cloud Firewall.
   * - **alinet**: Network defense plugin.
   * - **waf**: Web Application Firewall (WAF).
   * 
   * @example
   * alinet
   */
  statusType?: string;
  /**
   * @remarks
   * The type value.
   * 
   * @example
   * upload
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      statusType: 'Status_Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      statusType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackTypeListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of attack types.
   */
  attackTypeList?: GetAttackTypeListResponseBodyAttackTypeList[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackTypeList: 'AttackTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackTypeList: { 'type': 'array', 'itemType': GetAttackTypeListResponseBodyAttackTypeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackTypeList)) {
      $dara.Model.validateArray(this.attackTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

