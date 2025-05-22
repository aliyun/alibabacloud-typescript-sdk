// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences extends $dara.Model {
  /**
   * @remarks
   * The number of accounts within which stack operation failures are allowed to occur in each region. If the value of this parameter is exceeded in a region, Resource Orchestration Service (ROS) stops the operation in the region. If the operation is stopped in one region, the operation is no longer performed in other regions.
   * 
   * Valid values: 0 to 20.
   * 
   * > Only one of FailureToleranceCount and FailureTolerancePercentage can be returned.
   * 
   * @example
   * 1
   */
  failureToleranceCount?: number;
  /**
   * @remarks
   * The percentage of the number of accounts within which stack operation failures are allowed to occur to the total number of accounts in each region. If the value of this parameter is exceeded in a region, ROS stops the operation in the region.
   * 
   * Valid values: 0 to 100.
   * 
   * > Only one of FailureToleranceCount and FailureTolerancePercentage can be returned.
   * 
   * @example
   * 10
   */
  failureTolerancePercentage?: number;
  /**
   * @remarks
   * The maximum number of accounts within which stacks are deployed at the same time in each region.
   * 
   * Valid values: 1 to 20.
   * 
   * > Only one of MaxConcurrentCount and MaxConcurrentPercentage can be returned.
   * 
   * @example
   * 1
   */
  maxConcurrentCount?: number;
  /**
   * @remarks
   * The percentage of the maximum number of accounts within which stacks are deployed at the same time to the total number of accounts in each region.
   * 
   * Valid values: 1 to 100.
   * 
   * > Only one of MaxConcurrentCount and MaxConcurrentPercentage can be returned.
   * 
   * @example
   * 10
   */
  maxConcurrentPercentage?: number;
  /**
   * @remarks
   * The regions in the order of operation execution.
   */
  regionIdsOrder?: string[];
  static names(): { [key: string]: string } {
    return {
      failureToleranceCount: 'FailureToleranceCount',
      failureTolerancePercentage: 'FailureTolerancePercentage',
      maxConcurrentCount: 'MaxConcurrentCount',
      maxConcurrentPercentage: 'MaxConcurrentPercentage',
      regionIdsOrder: 'RegionIdsOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureToleranceCount: 'number',
      failureTolerancePercentage: 'number',
      maxConcurrentCount: 'number',
      maxConcurrentPercentage: 'number',
      regionIdsOrder: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.regionIdsOrder)) {
      $dara.Model.validateArray(this.regionIdsOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

