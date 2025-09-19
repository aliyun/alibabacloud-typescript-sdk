// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckConfigRequestAddedCheck extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to obtain the ID of the check item.
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
   * The requirement IDs that you want to add to the policy.
   */
  addIds?: number[];
  /**
   * @remarks
   * The requirement IDs that you want to remove from the policy.
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
   * The standard IDs that you want to add to the policy.
   */
  addIds?: number[];
  /**
   * @remarks
   * The standard IDs that you want to remove from the policy.
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
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to obtain the ID of the check item.
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
   * The list of check items that you want to add to the policy.
   * 
   * >  If the ConfigStandardIds or ConfigRequirementIds parameter is configured, this parameter does not take effect.
   */
  addedCheck?: ChangeCheckConfigRequestAddedCheck[];
  /**
   * @remarks
   * The requirement IDs that you want to specify for the check policy.
   * 
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to obtain the requirement ID. If the ConfigStandardIds parameter is configured, this parameter does not take effect.
   */
  configRequirementIds?: ChangeCheckConfigRequestConfigRequirementIds;
  /**
   * @remarks
   * The standard IDs that you want to specify for the check policy.
   * 
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to obtain the standard ID.
   */
  configStandardIds?: ChangeCheckConfigRequestConfigStandardIds;
  /**
   * @remarks
   * The configuration of the check item. Valid value:
   * 
   * *   **all**: Add all check items.
   * 
   * @example
   * all
   */
  configure?: string;
  /**
   * @remarks
   * The days in a week on which a check is performed.
   */
  cycleDays?: number[];
  /**
   * @remarks
   * Specifies whether to check the new check items in the selected requirement item. Valid values:
   * - **true**
   * - **false**
   * 
   * @example
   * false
   */
  enableAddCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the automatic periodical check feature. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  enableAutoCheck?: boolean;
  /**
   * @remarks
   * The end time of the check. The value specifies a point in time in a day. The time period that is specified by the start time and end time must be one of the following time periods:
   * 
   * *   **00:00 to 06:00:** If you set the StartTime parameter to 0, you must set the EndTime parameter to 6.
   * *   **06:00 to 12:00**: If you set the StartTime parameter to 6, you must set the EndTime parameter to 12.
   * *   **12:00 to 18:00**: If you set the StartTime parameter to 12, you must set the EndTime parameter to 18.
   * *  **18:00 to 24:00:** If you set the StartTime parameter to 18, you must set the EndTime parameter to 24.
   * 
   * @example
   * 6
   */
  endTime?: number;
  /**
   * @remarks
   * The region ID of the bastion host to query.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of the check items that you want to remove from the policy.
   * 
   * >  If the ConfigStandardIds or ConfigRequirementIds parameter is configured, this parameter does not take effect.
   */
  removedCheck?: ChangeCheckConfigRequestRemovedCheck[];
  /**
   * @remarks
   * An array that consists of the information about the check item.
   */
  standardIds?: number[];
  /**
   * @remarks
   * The start time of the check. The value specifies a point in time in a day.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * Specifies whether to use the configuration automatically generated by the system. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  systemConfig?: boolean;
  /**
   * @remarks
   * The cloud service providers.
   */
  vendors?: string[];
  static names(): { [key: string]: string } {
    return {
      addedCheck: 'AddedCheck',
      configRequirementIds: 'ConfigRequirementIds',
      configStandardIds: 'ConfigStandardIds',
      configure: 'Configure',
      cycleDays: 'CycleDays',
      enableAddCheck: 'EnableAddCheck',
      enableAutoCheck: 'EnableAutoCheck',
      endTime: 'EndTime',
      regionId: 'RegionId',
      removedCheck: 'RemovedCheck',
      standardIds: 'StandardIds',
      startTime: 'StartTime',
      systemConfig: 'SystemConfig',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedCheck: { 'type': 'array', 'itemType': ChangeCheckConfigRequestAddedCheck },
      configRequirementIds: ChangeCheckConfigRequestConfigRequirementIds,
      configStandardIds: ChangeCheckConfigRequestConfigStandardIds,
      configure: 'string',
      cycleDays: { 'type': 'array', 'itemType': 'number' },
      enableAddCheck: 'boolean',
      enableAutoCheck: 'boolean',
      endTime: 'number',
      regionId: 'string',
      removedCheck: { 'type': 'array', 'itemType': ChangeCheckConfigRequestRemovedCheck },
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

