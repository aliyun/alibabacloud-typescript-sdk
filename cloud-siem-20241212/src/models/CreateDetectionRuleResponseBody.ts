// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDetectionRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the detection rule.
   * 
   * @example
   * dr-ha1i09ob3zmqrs85****
   */
  detectionRuleId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CC09D0C-1CD7-54BD-A853-DCB2D945****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectionRuleId: 'DetectionRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionRuleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

