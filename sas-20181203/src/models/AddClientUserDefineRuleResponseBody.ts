// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddClientUserDefineRuleResponseBodyUserDefineRuleAddResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **windows**: Windows
   * *   **linux**: Linux
   * *   **all**: all types
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The switch ID of the custom defense rule.
   * 
   * @example
   * USER-DEFINE-RULE-SWITCH-TYPE_200****
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      platform: 'Platform',
      switchId: 'SwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      platform: 'string',
      switchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClientUserDefineRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 379a9b8f-107b-4630-9e95-2299a1ea****
   */
  requestId?: string;
  /**
   * @remarks
   * The identifier of the custom defense rule.
   */
  userDefineRuleAddResult?: AddClientUserDefineRuleResponseBodyUserDefineRuleAddResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userDefineRuleAddResult: 'UserDefineRuleAddResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userDefineRuleAddResult: AddClientUserDefineRuleResponseBodyUserDefineRuleAddResult,
    };
  }

  validate() {
    if(this.userDefineRuleAddResult && typeof (this.userDefineRuleAddResult as any).validate === 'function') {
      (this.userDefineRuleAddResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

