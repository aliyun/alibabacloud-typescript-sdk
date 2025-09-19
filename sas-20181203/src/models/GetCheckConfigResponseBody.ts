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
   * Cloud service configuration management
   */
  showName?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   **ON**: The check item is enabled.
   * *   **OFF**: The check item is disabled.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The type of the check item. Valid values:
   * 
   * *   **RISK**: cloud service configuration management
   * *   **IDENTITY_PERMISSION**: identity and permission management
   * *   **COMPLIANCE**: compliance
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
   * The days in a week on which an automatic check is performed.
   */
  cycleDays?: number[];
  /**
   * @remarks
   * Indicates whether the check for new check items in the selected requirement item is enabled by default. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableAddCheck?: boolean;
  /**
   * @remarks
   * Indicates whether the automatic check is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableAutoCheck?: boolean;
  /**
   * @remarks
   * The end time of the check. The value indicates a point in time. The time period that is specified by the start time and end time must be one of the following time periods:
   * 
   * *   **00:00 to 06:00**: If StartTime is set to 00:00, EndTime must be set to 06:00.
   * *   **06:00 to 12:00**: If StartTime is set to 06:00, EndTime must be set to 12:00.
   * *   **12:00 to 18:00**: If StartTime is set to 12:00, EndTime must be set to 18:00.
   * *   **18:00 to 24:00**: If StartTime is set to 18:00, EndTime must be set to 24:00.
   * 
   * @example
   * 6
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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
   * The information about the check items.
   */
  standards?: GetCheckConfigResponseBodyStandards[];
  /**
   * @remarks
   * The start time of the check. The value indicates a point in time.
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

