// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizedStrategyTargetsResponseBodyStartegyTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group.
   * 
   * >  You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of server groups.
   * 
   * @example
   * 14590457
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 1884
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the baseline check policy.
   * 
   * @example
   * win
   */
  strategyName?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * 2701ad2e-0e8f-428c-8812-ebb2686e****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      strategyId: 'number',
      strategyName: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedStrategyTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1EE7B150-D67E-53FD-A52D-3E8E669A****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the servers to which custom policies are applied.
   */
  startegyTargets?: DescribeCustomizedStrategyTargetsResponseBodyStartegyTargets[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      startegyTargets: 'StartegyTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      startegyTargets: { 'type': 'array', 'itemType': DescribeCustomizedStrategyTargetsResponseBodyStartegyTargets },
    };
  }

  validate() {
    if(Array.isArray(this.startegyTargets)) {
      $dara.Model.validateArray(this.startegyTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

