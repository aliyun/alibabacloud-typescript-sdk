// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditUsageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * BUSINESS
   */
  bizType?: string;
  /**
   * @remarks
   * The JSON string of instance IDs. This parameter can be omitted when `UsageType=User`. Set this parameter to the credit package instance ID when `UsageType=CreditPackage`, or to the `AgentId` when `UsageType=Agent`.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The usage type. Valid values:
   * *   User: Returns the usage, remaining credits, and consumption trends of the active credit packages for the current user.
   * *   CreditPackage: Requires a CreditPackageId. Returns the total and remaining credits of the specified credit package.
   * *   Agent: Requires an AgentId. Returns the cumulative credit usage, cumulative allocated quota, and the percentages of both.
   * 
   * @example
   * User
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      instanceIds: 'InstanceIds',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      usageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

