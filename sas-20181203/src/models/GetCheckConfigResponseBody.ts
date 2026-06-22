// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckConfigResponseBodySelectedChecks extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 3
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

export class GetCheckConfigResponseBodyStandards extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * 云产品配置管理
   */
  showName?: string;
  /**
   * @remarks
   * The enabling status of the check item. Valid values:
   * 
   * - **ON:** Enabled.
   * - **OFF:** Shutdown.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The type of the check item. Valid values:
   * 
   * - **RISK:** cloud service configuration management
   * - **IDENTITY_PERMISSION:** permission management
   * - **COMPLIANCE:** compliance.
   * 
   * @example
   * RISK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      showName: 'ShowName',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      showName: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The periodic check schedule.
   */
  cycleDays?: number[];
  /**
   * @remarks
   * Indicates whether new check items added to the selected standards are checked by default. Valid values:
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
   * Indicates whether automatic periodic checks are enabled. Valid values:
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
   * The end time of the check period, indicating the hour of the day. The start time and end time must fall within one of the following time ranges:
   * 
   * - **0~6**: If the start time is 0, the end time must be set to 6.
   * - **6~12**: If the start time is 6, the end time must be set to 12.
   * - **12~18**: If the start time is 12, the end time must be set to 18.
   * - **18~24**: If the start time is 18, the end time must be set to 24.
   * 
   * @example
   * 6
   */
  endTime?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 5A3D5C8F-2A42-5477-BDD8-27E64B5F1739
   */
  requestId?: string;
  /**
   * @remarks
   * The check items selected in the policy.
   */
  selectedChecks?: GetCheckConfigResponseBodySelectedChecks[];
  /**
   * @remarks
   * The list of check item information.
   */
  standards?: GetCheckConfigResponseBodyStandards[];
  /**
   * @remarks
   * The start time of the check period, indicating the hour of the day.
   * 
   * @example
   * 0
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      cycleDays: 'CycleDays',
      enableAddCheck: 'EnableAddCheck',
      enableAutoCheck: 'EnableAutoCheck',
      endTime: 'EndTime',
      requestId: 'RequestId',
      selectedChecks: 'SelectedChecks',
      standards: 'Standards',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleDays: { 'type': 'array', 'itemType': 'number' },
      enableAddCheck: 'boolean',
      enableAutoCheck: 'boolean',
      endTime: 'number',
      requestId: 'string',
      selectedChecks: { 'type': 'array', 'itemType': GetCheckConfigResponseBodySelectedChecks },
      standards: { 'type': 'array', 'itemType': GetCheckConfigResponseBodyStandards },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cycleDays)) {
      $dara.Model.validateArray(this.cycleDays);
    }
    if(Array.isArray(this.selectedChecks)) {
      $dara.Model.validateArray(this.selectedChecks);
    }
    if(Array.isArray(this.standards)) {
      $dara.Model.validateArray(this.standards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

