// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStrategyTargetResponseBodyStrategyTargets extends $dara.Model {
  /**
   * @remarks
   * The number of the assets that belong to the asset group.
   * 
   * @example
   * 85
   */
  bindUuidCount?: number;
  /**
   * @remarks
   * Indicates whether the baseline check policy is applied to the asset group. Valid values:
   * 
   * *   **add**: The baseline check policy is applied to the asset group.
   * *   **del**: the baseline check policy is not applied to the asset group.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The ID of the asset group to which the assets belong or the UUID of the asset.
   * 
   * @example
   * 9165712
   */
  target?: string;
  /**
   * @remarks
   * The method that is used to add the assets to the baseline check policy. Valid values:
   * 
   * *   **groupId**: the ID of the asset group
   * *   **uuid**: the UUID of the asset
   * 
   * @example
   * groupId
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      bindUuidCount: 'BindUuidCount',
      flag: 'Flag',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUuidCount: 'number',
      flag: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 001BAB34-D70A-54B0-B1D7-91B76DCDD8E8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the assets to which the baseline check policy is applied.
   */
  strategyTargets?: DescribeStrategyTargetResponseBodyStrategyTargets[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyTargets: 'StrategyTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyTargets: { 'type': 'array', 'itemType': DescribeStrategyTargetResponseBodyStrategyTargets },
    };
  }

  validate() {
    if(Array.isArray(this.strategyTargets)) {
      $dara.Model.validateArray(this.strategyTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

