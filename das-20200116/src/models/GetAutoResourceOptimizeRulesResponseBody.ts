// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic fragment recycling feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoDefragment?: boolean;
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dasProOn?: boolean;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The fragmentation rate of a single physical table for which the automatic fragment recycling feature is enabled.
   * 
   * @example
   * 0.2
   */
  tableFragmentationRatio?: number;
  /**
   * @remarks
   * The minimum storage usage of a single physical table for which the automatic fragment recycling feature is enabled. Unit: GB.
   * 
   * @example
   * 10
   */
  tableSpaceSize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * @example
   * 140692647406****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDefragment: 'AutoDefragment',
      dasProOn: 'DasProOn',
      instanceId: 'InstanceId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDefragment: 'boolean',
      dasProOn: 'boolean',
      instanceId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic fragment recycling feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoDefragment?: boolean;
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dasProOn?: boolean;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze9xrhze0709****
   */
  instanceId?: string;
  /**
   * @remarks
   * The fragmentation rate of a single physical table for which the automatic fragment recycling feature is enabled.
   * 
   * @example
   * 0.2
   */
  tableFragmentationRatio?: number;
  /**
   * @remarks
   * The minimum storage usage of a single physical table for which the automatic fragment recycling feature is enabled. Unit: GB.
   * 
   * @example
   * 10
   */
  tableSpaceSize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * @example
   * 140692647406****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDefragment: 'AutoDefragment',
      dasProOn: 'DasProOn',
      instanceId: 'InstanceId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDefragment: 'boolean',
      dasProOn: 'boolean',
      instanceId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic fragment recycling feature is enabled. Valid values:
   * 
   * *   **true**:
   * *   **false**
   * 
   * @example
   * false
   */
  autoDefragment?: boolean;
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dasProOn?: boolean;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2vc54m2a6pd6p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The fragmentation rate of a single physical table for which the automatic fragment recycling feature is enabled.
   * 
   * @example
   * 0.2
   */
  tableFragmentationRatio?: number;
  /**
   * @remarks
   * The minimum storage usage of a single physical table for which the automatic fragment recycling feature is enabled. Unit: GB.
   * 
   * @example
   * 10
   */
  tableSpaceSize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * @example
   * 140692647406****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDefragment: 'AutoDefragment',
      dasProOn: 'DasProOn',
      instanceId: 'InstanceId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDefragment: 'boolean',
      dasProOn: 'boolean',
      instanceId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the automatic fragment recycling feature is currently enabled.
   * 
   * @example
   * 1
   */
  enableAutoResourceOptimizeCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic fragment recycling feature is currently enabled.
   */
  enableAutoResourceOptimizeList?: GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList[];
  /**
   * @remarks
   * The number of database instances for which the automatic fragment recycling feature is enabled and DAS Enterprise Edition is disabled.
   * 
   * @example
   * 1
   */
  hasEnableRuleButNotDasProCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic fragment recycling feature is enabled and DAS Enterprise Edition is disabled.
   * 
   * >  Automatic fragment recycling tasks are run on this type of database instances only if DAS Enterprise Edition is enabled for the database instances again.
   */
  hasEnableRuleButNotDasProList?: GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList[];
  /**
   * @remarks
   * The number of database instances that do not exist or for which the automatic fragment recycling feature has never been enabled.
   * 
   * >  If a database instance does not exist, the instance has been released or the specified instance ID is invalid.
   * 
   * @example
   * 1
   */
  neverEnableAutoResourceOptimizeOrReleasedInstanceCount?: number;
  /**
   * @remarks
   * The database instances that do not exist or for which the automatic fragment recycling feature has never been enabled.
   */
  neverEnableAutoResourceOptimizeOrReleasedInstanceIdList?: string[];
  /**
   * @remarks
   * The number of database instances for which the automatic fragment recycling feature has been enabled.
   * 
   * @example
   * 3
   */
  totalAutoResourceOptimizeRulesCount?: number;
  /**
   * @remarks
   * The number of database instances for which the automatic fragment recycling feature was once enabled but is currently disabled.
   * 
   * @example
   * 1
   */
  turnOffAutoResourceOptimizeCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic fragment recycling feature was once enabled but is currently disabled.
   */
  turnOffAutoResourceOptimizeList?: GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList[];
  static names(): { [key: string]: string } {
    return {
      enableAutoResourceOptimizeCount: 'EnableAutoResourceOptimizeCount',
      enableAutoResourceOptimizeList: 'EnableAutoResourceOptimizeList',
      hasEnableRuleButNotDasProCount: 'HasEnableRuleButNotDasProCount',
      hasEnableRuleButNotDasProList: 'HasEnableRuleButNotDasProList',
      neverEnableAutoResourceOptimizeOrReleasedInstanceCount: 'NeverEnableAutoResourceOptimizeOrReleasedInstanceCount',
      neverEnableAutoResourceOptimizeOrReleasedInstanceIdList: 'NeverEnableAutoResourceOptimizeOrReleasedInstanceIdList',
      totalAutoResourceOptimizeRulesCount: 'TotalAutoResourceOptimizeRulesCount',
      turnOffAutoResourceOptimizeCount: 'TurnOffAutoResourceOptimizeCount',
      turnOffAutoResourceOptimizeList: 'TurnOffAutoResourceOptimizeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutoResourceOptimizeCount: 'number',
      enableAutoResourceOptimizeList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList },
      hasEnableRuleButNotDasProCount: 'number',
      hasEnableRuleButNotDasProList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList },
      neverEnableAutoResourceOptimizeOrReleasedInstanceCount: 'number',
      neverEnableAutoResourceOptimizeOrReleasedInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      totalAutoResourceOptimizeRulesCount: 'number',
      turnOffAutoResourceOptimizeCount: 'number',
      turnOffAutoResourceOptimizeList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList },
    };
  }

  validate() {
    if(Array.isArray(this.enableAutoResourceOptimizeList)) {
      $dara.Model.validateArray(this.enableAutoResourceOptimizeList);
    }
    if(Array.isArray(this.hasEnableRuleButNotDasProList)) {
      $dara.Model.validateArray(this.hasEnableRuleButNotDasProList);
    }
    if(Array.isArray(this.neverEnableAutoResourceOptimizeOrReleasedInstanceIdList)) {
      $dara.Model.validateArray(this.neverEnableAutoResourceOptimizeOrReleasedInstanceIdList);
    }
    if(Array.isArray(this.turnOffAutoResourceOptimizeList)) {
      $dara.Model.validateArray(this.turnOffAutoResourceOptimizeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoResourceOptimizeRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetAutoResourceOptimizeRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAutoResourceOptimizeRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

