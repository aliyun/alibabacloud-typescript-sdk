// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowMetricResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"instanceId\\": \\"np-4wrye3ishxi47****\\", \\"requestId\\": \\"4F0CD5B6-70D6-5115-A2F7-7EAC3981****\\", \\"dataPoints\\": [{\\"timeStamp\\": 1636510320000, \\"Average\\": 293752.0}]}
   */
  data?: string;
  /**
   * @example
   * 6857EDCB-631F-5405-BE95-45CBB4C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

