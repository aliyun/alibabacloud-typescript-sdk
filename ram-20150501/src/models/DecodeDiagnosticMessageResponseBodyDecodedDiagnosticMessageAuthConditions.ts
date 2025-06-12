// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the condition.
   * 
   * @example
   * acs:SourceIp
   */
  conditionKey?: string;
  /**
   * @remarks
   * The values that correspond to the key.
   */
  conditionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionValues: 'ConditionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.conditionValues)) {
      $dara.Model.validateArray(this.conditionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

