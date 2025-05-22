// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTemplatePolicyResponseBodyPolicyStatement extends $dara.Model {
  /**
   * @remarks
   * The operations that are performed on the specified resource.
   */
  action?: string[];
  /**
   * @remarks
   * The condition that is required for the policy to take effect.
   * 
   * @example
   * {
   *     "StringEquals": {
   *         "acs:Service": "fc.aliyuncs.com"
   *     }
   * }
   */
  condition?: { [key: string]: any };
  /**
   * @remarks
   * The effect of the statement. Valid values:
   * 
   * *   Allow
   * *   Deny
   * 
   * @example
   * Allow
   */
  effect?: string;
  /**
   * @remarks
   * The objects that the statement covers. An asterisk (\\*) indicates all resources.
   * 
   * @example
   * *
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      condition: 'Condition',
      effect: 'Effect',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      condition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effect: 'string',
      resource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    if(this.condition) {
      $dara.Model.validateMap(this.condition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

