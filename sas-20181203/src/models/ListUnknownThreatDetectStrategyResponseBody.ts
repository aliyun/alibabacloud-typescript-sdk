// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectStrategyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asset selection identifier.
   * 
   * @example
   * UNKNOWN_THREAT_DETECT_CONFIG_****
   */
  assetSelectionType?: string;
  /**
   * @remarks
   * The duration, in days, of the learning phase after model creation.
   * 
   * @example
   * 1
   */
  durationDaysAfterInit?: number;
  /**
   * @remarks
   * The number of consecutive days without new process detections before the learning phase automatically ends.
   * 
   * @example
   * 1
   */
  durationDaysAfterStop?: number;
  /**
   * @remarks
   * The strategy ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of servers.
   * 
   * @example
   * 1
   */
  machineCount?: number;
  /**
   * @remarks
   * The strategy name.
   * 
   * @example
   * test****
   */
  name?: string;
  /**
   * @remarks
   * The whitelist mode. Valid values:
   * 
   * - **hash**: process hash
   * 
   * - **path**: process path
   * 
   * @example
   * hash
   */
  studyMode?: string;
  static names(): { [key: string]: string } {
    return {
      assetSelectionType: 'AssetSelectionType',
      durationDaysAfterInit: 'DurationDaysAfterInit',
      durationDaysAfterStop: 'DurationDaysAfterStop',
      id: 'Id',
      machineCount: 'MachineCount',
      name: 'Name',
      studyMode: 'StudyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSelectionType: 'string',
      durationDaysAfterInit: 'number',
      durationDaysAfterStop: 'number',
      id: 'number',
      machineCount: 'number',
      name: 'string',
      studyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnknownThreatDetectStrategyResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of matching entries.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnknownThreatDetectStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of strategies.
   */
  data?: ListUnknownThreatDetectStrategyResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListUnknownThreatDetectStrategyResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 898F7AA7-CECD-5EC7-AF4D-664C601B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUnknownThreatDetectStrategyResponseBodyData },
      pageInfo: ListUnknownThreatDetectStrategyResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

