// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSummariesResponseBodyCenterSummary extends $dara.Model {
  /**
   * @remarks
   * The number of registered resource types.
   * 
   * @example
   * 3
   */
  registeredResourceTypeCount?: number;
  /**
   * @remarks
   * The number of templates.
   * 
   * @example
   * 2
   */
  templateCount?: string;
  static names(): { [key: string]: string } {
    return {
      registeredResourceTypeCount: 'RegisteredResourceTypeCount',
      templateCount: 'TemplateCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registeredResourceTypeCount: 'number',
      templateCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummariesResponseBodyRegionSummariesStackDetails extends $dara.Model {
  /**
   * @remarks
   * The brief status of the stack. Valid values:
   * 
   * - IN_PROGRESS: In progress (including creation, update, deletion, rollback, import creation, and import update in progress).
   * 
   * - COMPLETE: Complete (including successful creation, update, deletion, rollback, import creation, and import update).
   * 
   * - FAILED: Failed (including failed creation, update, deletion, rollback, import creation, and import update).
   * 
   * @example
   * COMPLETE
   */
  briefStatus?: string;
  /**
   * @remarks
   * The number of stacks.
   * 
   * @example
   * 1
   */
  count?: string;
  static names(): { [key: string]: string } {
    return {
      briefStatus: 'BriefStatus',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      briefStatus: 'string',
      count: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummariesResponseBodyRegionSummaries extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of stacks.
   * 
   * @example
   * 1
   */
  stackCount?: string;
  /**
   * @remarks
   * Stack details.
   */
  stackDetails?: ListSummariesResponseBodyRegionSummariesStackDetails[];
  /**
   * @remarks
   * The number of stack groups.
   * 
   * @example
   * 1
   */
  stackGroupCount?: string;
  /**
   * @remarks
   * The number of resource scenarios.
   * 
   * @example
   * 1
   */
  templateScratchCount?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackCount: 'StackCount',
      stackDetails: 'StackDetails',
      stackGroupCount: 'StackGroupCount',
      templateScratchCount: 'TemplateScratchCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackCount: 'string',
      stackDetails: { 'type': 'array', 'itemType': ListSummariesResponseBodyRegionSummariesStackDetails },
      stackGroupCount: 'string',
      templateScratchCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stackDetails)) {
      $dara.Model.validateArray(this.stackDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummariesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Statistics about the number of central ROS resources.
   */
  centerSummary?: ListSummariesResponseBodyCenterSummary;
  /**
   * @remarks
   * Statistics about the number of Resource Orchestration Service (ROS) resources in each region.
   */
  regionSummaries?: ListSummariesResponseBodyRegionSummaries[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B842BB91-A004-59CC-83E3-C961567FCBC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      centerSummary: 'CenterSummary',
      regionSummaries: 'RegionSummaries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerSummary: ListSummariesResponseBodyCenterSummary,
      regionSummaries: { 'type': 'array', 'itemType': ListSummariesResponseBodyRegionSummaries },
      requestId: 'string',
    };
  }

  validate() {
    if(this.centerSummary && typeof (this.centerSummary as any).validate === 'function') {
      (this.centerSummary as any).validate();
    }
    if(Array.isArray(this.regionSummaries)) {
      $dara.Model.validateArray(this.regionSummaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

