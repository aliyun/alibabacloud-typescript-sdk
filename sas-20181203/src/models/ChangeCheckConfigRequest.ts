// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckConfigRequestAddedCheck extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > Call [ListCheckResult](~~ListCheckResult~~) to obtain check item IDs.
   * 
   * @example
   * 5
   */
  checkId?: number;
  /**
   * @remarks
   * The section ID of the check item.
   * 
   * @example
   * 69
   */
  sectionId?: number;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      sectionId: 'SectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      sectionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCheckConfigRequestConfigRequirementIds extends $dara.Model {
  /**
   * @remarks
   * The list of requirement IDs to add to the policy.
   */
  addIds?: number[];
  /**
   * @remarks
   * The list of requirement IDs to remove from the policy.
   */
  removeIds?: number[];
  static names(): { [key: string]: string } {
    return {
      addIds: 'AddIds',
      removeIds: 'RemoveIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addIds: { 'type': 'array', 'itemType': 'number' },
      removeIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.addIds)) {
      $dara.Model.validateArray(this.addIds);
    }
    if(Array.isArray(this.removeIds)) {
      $dara.Model.validateArray(this.removeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCheckConfigRequestConfigStandardIds extends $dara.Model {
  /**
   * @remarks
   * The list of standard IDs to add to the policy.
   */
  addIds?: number[];
  /**
   * @remarks
   * The list of standard IDs to remove from the policy.
   */
  removeIds?: number[];
  static names(): { [key: string]: string } {
    return {
      addIds: 'AddIds',
      removeIds: 'RemoveIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addIds: { 'type': 'array', 'itemType': 'number' },
      removeIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.addIds)) {
      $dara.Model.validateArray(this.addIds);
    }
    if(Array.isArray(this.removeIds)) {
      $dara.Model.validateArray(this.removeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCheckConfigRequestRemovedCheck extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > Call [ListCheckResult](~~ListCheckResult~~) to obtain check item IDs.
   * 
   * @example
   * 19
   */
  checkId?: number;
  /**
   * @remarks
   * The section ID of the check item.
   * 
   * @example
   * 69
   */
  sectionId?: number;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      sectionId: 'SectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      sectionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCheckConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of check items to add to the policy.
   * <notice> If ConfigStandardIds or ConfigRequirementIds is specified, this parameter does not take effect.
   */
  addedCheck?: ChangeCheckConfigRequestAddedCheck[];
  /**
   * @remarks
   * The client token used to ensure request idempotency. Use a different token for each request. Only ASCII characters are supported. The token can be up to 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Configures the check policy by specifying requirement IDs.
   * 
   * > Call [ListCheckResult](~~ListCheckResult~~) to obtain requirement IDs. If ConfigStandardIds is specified, this parameter does not take effect.
   */
  configRequirementIds?: ChangeCheckConfigRequestConfigRequirementIds;
  /**
   * @remarks
   * Configures the check policy by specifying standard IDs.
   * 
   * > Call [ListCheckResult](~~ListCheckResult~~) to obtain standard IDs.
   */
  configStandardIds?: ChangeCheckConfigRequestConfigStandardIds;
  /**
   * @remarks
   * The field configuration. Valid values:
   * 
   * - **all:** Adds all check items.
   * 
   * @example
   * all
   */
  configure?: string;
  /**
   * @remarks
   * The scheduled check days.
   */
  cycleDays?: number[];
  /**
   * @remarks
   * Specifies whether to automatically include newly added check items from the selected requirements. Valid values:
   * 
   * - **true:** Enabled.
   * - **false:** Disabled.
   * 
   * @example
   * false
   */
  enableAddCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic scheduled checks. Valid values:
   * 
   * - **true:** Enabled.
   * - **false:** Disabled.
   * 
   * @example
   * true
   */
  enableAutoCheck?: boolean;
  /**
   * @remarks
   * The end hour of the check time window, expressed as an hour of the day. The start and end times must fall within one of the following time ranges. Valid values: 6, 12, 18, 24.
   * 
   * - **0~6:** If the start time is 0, set the end time to 6.
   * - **6~12:** If the start time is 6, set the end time to 12.
   * - **12~18:** If the start time is 12, set the end time to 18.
   * - **18~24:** If the start time is 18, set the end time to 24.
   * 
   * @example
   * 6
   */
  endTime?: number;
  /**
   * @remarks
   * The region of the Security Center instance. Valid values:
   * 
   * - **cn-hangzhou:** China (Hangzhou)
   * - **ap-southeast-1:** Singapore
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of check items to remove from the policy.
   * <notice> If ConfigStandardIds or ConfigRequirementIds is specified, this parameter does not take effect.
   */
  removedCheck?: ChangeCheckConfigRequestRemovedCheck[];
  /**
   * @remarks
   * The ID of the resource directory member accounts (Alibaba Cloud account).
   * > Call [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * This parameter is deprecated. You do not need to configure it.
   */
  standardIds?: number[];
  /**
   * @remarks
   * The start hour of the check time window, expressed as an hour of the day. The start and end times must fall within one of the following time ranges. Valid values: 0, 6, 12, 18.
   * 
   * - **0~6:** If the start time is 0, set the end time to 6.
   * - **6~12:** If the start time is 6, set the end time to 12.
   * - **12~18:** If the start time is 12, set the end time to 18.
   * - **18~24:** If the start time is 18, set the end time to 24.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * Specifies whether to use the system-generated configuration. Valid values:
   * - **true:** Yes.
   * - **false:** No.
   * 
   * @example
   * true
   */
  systemConfig?: boolean;
  /**
   * @remarks
   * The list of cloud vendors.
   */
  vendors?: string[];
  static names(): { [key: string]: string } {
    return {
      addedCheck: 'AddedCheck',
      clientToken: 'ClientToken',
      configRequirementIds: 'ConfigRequirementIds',
      configStandardIds: 'ConfigStandardIds',
      configure: 'Configure',
      cycleDays: 'CycleDays',
      enableAddCheck: 'EnableAddCheck',
      enableAutoCheck: 'EnableAutoCheck',
      endTime: 'EndTime',
      regionId: 'RegionId',
      removedCheck: 'RemovedCheck',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      standardIds: 'StandardIds',
      startTime: 'StartTime',
      systemConfig: 'SystemConfig',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedCheck: { 'type': 'array', 'itemType': ChangeCheckConfigRequestAddedCheck },
      clientToken: 'string',
      configRequirementIds: ChangeCheckConfigRequestConfigRequirementIds,
      configStandardIds: ChangeCheckConfigRequestConfigStandardIds,
      configure: 'string',
      cycleDays: { 'type': 'array', 'itemType': 'number' },
      enableAddCheck: 'boolean',
      enableAutoCheck: 'boolean',
      endTime: 'number',
      regionId: 'string',
      removedCheck: { 'type': 'array', 'itemType': ChangeCheckConfigRequestRemovedCheck },
      resourceDirectoryAccountId: 'number',
      standardIds: { 'type': 'array', 'itemType': 'number' },
      startTime: 'number',
      systemConfig: 'boolean',
      vendors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addedCheck)) {
      $dara.Model.validateArray(this.addedCheck);
    }
    if(this.configRequirementIds && typeof (this.configRequirementIds as any).validate === 'function') {
      (this.configRequirementIds as any).validate();
    }
    if(this.configStandardIds && typeof (this.configStandardIds as any).validate === 'function') {
      (this.configStandardIds as any).validate();
    }
    if(Array.isArray(this.cycleDays)) {
      $dara.Model.validateArray(this.cycleDays);
    }
    if(Array.isArray(this.removedCheck)) {
      $dara.Model.validateArray(this.removedCheck);
    }
    if(Array.isArray(this.standardIds)) {
      $dara.Model.validateArray(this.standardIds);
    }
    if(Array.isArray(this.vendors)) {
      $dara.Model.validateArray(this.vendors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

