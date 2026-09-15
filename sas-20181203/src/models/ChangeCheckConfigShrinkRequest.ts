// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckConfigShrinkRequestAddedCheck extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > Call the [ListCheckResult](~~ListCheckResult~~) operation to obtain check item IDs.
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

export class ChangeCheckConfigShrinkRequestRemovedCheck extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > Call the [ListCheckResult](~~ListCheckResult~~) operation to obtain check item IDs.
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

export class ChangeCheckConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of check items to add to the policy.
   * <notice> If the ConfigStandardIds or ConfigRequirementIds parameter is specified, this parameter does not take effect.
   */
  addedCheck?: ChangeCheckConfigShrinkRequestAddedCheck[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Use a different token for each request. Only ASCII characters are supported. The token can be up to 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Configures the check policy by specifying requirement IDs.
   * 
   * > Call the [ListCheckResult](~~ListCheckResult~~) operation to obtain requirement IDs. If the ConfigStandardIds parameter is specified, this parameter does not take effect.
   */
  configRequirementIdsShrink?: string;
  /**
   * @remarks
   * Configures the check policy by specifying standard IDs.
   * 
   * > Call the [ListCheckResult](~~ListCheckResult~~) operation to obtain standard IDs.
   */
  configStandardIdsShrink?: string;
  /**
   * @remarks
   * The field configuration. Valid values:
   * 
   * - **all**: adds all check items.
   * 
   * @example
   * all
   */
  configure?: string;
  /**
   * @remarks
   * The periodic check schedule.
   */
  cycleDays?: number[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values: true: performs only a dry run without performing the actual operation. false: performs the actual request. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically check newly added check items in the selected requirements. Valid values:
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
   * Specifies whether to enable automatic periodic checks. Valid values:
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
   * The end hour of the check time window, indicating the hour of the day. The start time and end time must fall within one of the following time ranges. Valid values: 6, 12, 18, and 24.
   * 
   * - **0~6**: If the start time is 0, the end time must be set to 6 on the same day.
   * - **6~12**: If the start time is 6, the end time must be set to 12 on the same day.
   * - **12~18**: If the start time is 12, the end time must be set to 18 on the same day.
   * - **18~24**: If the start time is 18, the end time must be set to 24 on the same day.
   * 
   * @example
   * 6
   */
  endTime?: number;
  /**
   * @remarks
   * The region of the Security Center instance. Valid values:
   * 
   * - **cn-hangzhou:** China
   * - **ap-southeast-1:** Singapore
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of check items to remove from the policy.
   * <notice> If the ConfigStandardIds or ConfigRequirementIds parameter is specified, this parameter does not take effect.
   */
  removedCheck?: ChangeCheckConfigShrinkRequestRemovedCheck[];
  /**
   * @remarks
   * The ID of the member account in the resource directory (Alibaba Cloud account).
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   */
  standardIds?: number[];
  /**
   * @remarks
   * The start hour of the check time window, indicating the hour of the day. The start time and end time must fall within one of the following time ranges. Valid values: 0, 6, 12, and 18.
   * 
   * - **0~6**: If the start time is 0, the end time must be set to 6 on the same day.
   * - **6~12**: If the start time is 6, the end time must be set to 12 on the same day.
   * - **12~18**: If the start time is 12, the end time must be set to 18 on the same day.
   * - **18~24**: If the start time is 18, the end time must be set to 24 on the same day.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * Specifies whether to use the system-generated configuration. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  systemConfig?: boolean;
  /**
   * @remarks
   * The list of cloud service providers.
   */
  vendors?: string[];
  static names(): { [key: string]: string } {
    return {
      addedCheck: 'AddedCheck',
      clientToken: 'ClientToken',
      configRequirementIdsShrink: 'ConfigRequirementIds',
      configStandardIdsShrink: 'ConfigStandardIds',
      configure: 'Configure',
      cycleDays: 'CycleDays',
      dryRun: 'DryRun',
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
      addedCheck: { 'type': 'array', 'itemType': ChangeCheckConfigShrinkRequestAddedCheck },
      clientToken: 'string',
      configRequirementIdsShrink: 'string',
      configStandardIdsShrink: 'string',
      configure: 'string',
      cycleDays: { 'type': 'array', 'itemType': 'number' },
      dryRun: 'boolean',
      enableAddCheck: 'boolean',
      enableAutoCheck: 'boolean',
      endTime: 'number',
      regionId: 'string',
      removedCheck: { 'type': 'array', 'itemType': ChangeCheckConfigShrinkRequestRemovedCheck },
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

