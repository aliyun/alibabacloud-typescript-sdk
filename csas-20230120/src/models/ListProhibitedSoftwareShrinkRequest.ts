// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProhibitedSoftwareShrinkRequestSoftwareIds extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software is a system built-in prohibited software. Valid values:
   * - **true**: A system built-in prohibited software that is shared across all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: Custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the prohibited software. You can obtain the value from the following operations:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): Lists prohibited software.
   * - [CreateProhibitedSoftware](~~CreateProhibitedSoftware~~): Creates custom prohibited software.
   * 
   * @example
   * swb-d9f669a09746****
   */
  softwareId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      softwareId: 'SoftwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      softwareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProhibitedSoftwareShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The operating system type for which the prohibited software has configured processes.
   * 
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @remarks
   * The name of the prohibited software.
   * 
   * @example
   * Thunder
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the software prohibition policy. You can obtain the value from the following operations:
   * - [ListProhibitedPolicies](~~ListProhibitedPolicies~~): Lists software prohibition policies.
   * - [CreateProhibitedPolicy](~~CreateProhibitedPolicy~~): Creates a software prohibition policy.
   * 
   * @example
   * pid-5a1e8c3f7b09****
   */
  policyId?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * Thunder.exe
   */
  processName?: string;
  /**
   * @remarks
   * The collection of prohibited software IDs. Duplicate values are not allowed.
   */
  softwareIds?: ListProhibitedSoftwareShrinkRequestSoftwareIds[];
  /**
   * @remarks
   * The unique identifier of the prohibited software tag.
   */
  tagIdShrink?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceType: 'DeviceType',
      name: 'Name',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      processName: 'ProcessName',
      softwareIds: 'SoftwareIds',
      tagIdShrink: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceType: 'string',
      name: 'string',
      pageSize: 'number',
      policyId: 'string',
      processName: 'string',
      softwareIds: { 'type': 'array', 'itemType': ListProhibitedSoftwareShrinkRequestSoftwareIds },
      tagIdShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.softwareIds)) {
      $dara.Model.validateArray(this.softwareIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

