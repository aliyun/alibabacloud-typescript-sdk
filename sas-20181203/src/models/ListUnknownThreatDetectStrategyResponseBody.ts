// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectStrategyResponseBodyData extends $dara.Model {
  /**
   * @example
   * UNKNOWN_THREAT_DETECT_CONFIG_****
   */
  assetSelectionType?: string;
  /**
   * @example
   * 1
   */
  durationDaysAfterInit?: number;
  /**
   * @example
   * 1
   */
  durationDaysAfterStop?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  machineCount?: number;
  /**
   * @example
   * test****
   */
  name?: string;
  /**
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
   * @example
   * 20
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
  data?: ListUnknownThreatDetectStrategyResponseBodyData[];
  pageInfo?: ListUnknownThreatDetectStrategyResponseBodyPageInfo;
  /**
   * @remarks
   * Id of the request
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

