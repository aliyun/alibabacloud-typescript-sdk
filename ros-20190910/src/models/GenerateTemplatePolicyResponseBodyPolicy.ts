// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateTemplatePolicyResponseBodyPolicyStatement } from "./GenerateTemplatePolicyResponseBodyPolicyStatement";


export class GenerateTemplatePolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The statements that are contained in the policy.
   */
  statement?: GenerateTemplatePolicyResponseBodyPolicyStatement[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      statement: 'Statement',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statement: { 'type': 'array', 'itemType': GenerateTemplatePolicyResponseBodyPolicyStatement },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statement)) {
      $dara.Model.validateArray(this.statement);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

