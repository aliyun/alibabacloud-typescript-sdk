// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskListCheckResultResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the cloud service.
   * 
   * @example
   * rm-bp1e8t4q15sr3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The total number of risk items detected in the current cloud service.
   * 
   * @example
   * 3
   */
  riskCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      riskCount: 'riskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      riskCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskListCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of risk items for each cloud service.
   */
  list?: DescribeRiskListCheckResultResponseBodyList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3BFB4989-A108-46A4-954E-FF7EF02D1078
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeRiskListCheckResultResponseBodyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

