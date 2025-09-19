// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientConfStrategyResponseBodyTargetList extends $dara.Model {
  /**
   * @remarks
   * The UUID of the Security Center agent.
   * 
   * @example
   * 2b1753a6-04d9-448e-ad17-7abdf19f****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeClientConfStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5BD95679-D63A-4151-97D0-188432F****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the configurations.
   */
  targetList?: DescribeClientConfStrategyResponseBodyTargetList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      targetList: 'TargetList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      targetList: { 'type': 'array', 'itemType': DescribeClientConfStrategyResponseBodyTargetList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

