// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptFulfillmentDecisionRequest extends $dara.Model {
  decisionConclusion?: string;
  decisionType?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      decisionConclusion: 'DecisionConclusion',
      decisionType: 'DecisionType',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decisionConclusion: 'string',
      decisionType: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

