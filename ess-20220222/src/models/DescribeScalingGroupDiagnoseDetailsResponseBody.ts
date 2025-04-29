// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingGroupDiagnoseDetailsResponseBodyDetails } from "./DescribeScalingGroupDiagnoseDetailsResponseBodyDetails";


export class DescribeScalingGroupDiagnoseDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the diagnostic report.
   */
  details?: DescribeScalingGroupDiagnoseDetailsResponseBodyDetails[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 688B18B8-FB1E-42EB-A1ED-7F55B090****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeScalingGroupDiagnoseDetailsResponseBodyDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

