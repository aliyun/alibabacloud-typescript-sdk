// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackTypeListResponseBodyAttackTypeList extends $dara.Model {
  /**
   * @remarks
   * The description of the attack type.
   * 
   * @example
   * sas.attack.type.type12
   */
  label?: string;
  /**
   * @remarks
   * The attack source. Valid values:
   * 
   * *   **cfw**: Cloud Firewall
   * *   **alinet**: network defense plug-in
   * *   **waf**: Web Application Firewall (WAF)
   * 
   * @example
   * alinet
   */
  statusType?: string;
  /**
   * @remarks
   * The value of the attack type.
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
   * The attack types.
   */
  attackTypeList?: GetAttackTypeListResponseBodyAttackTypeList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

