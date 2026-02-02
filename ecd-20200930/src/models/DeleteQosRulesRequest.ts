// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQosRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  qosRuleId?: string[];
  static names(): { [key: string]: string } {
    return {
      qosRuleId: 'QosRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosRuleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.qosRuleId)) {
      $dara.Model.validateArray(this.qosRuleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

