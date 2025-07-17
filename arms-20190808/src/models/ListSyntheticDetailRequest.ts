// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyntheticDetailRequestAdvancedFilters extends $dara.Model {
  /**
   * @remarks
   * The filter condition. The taskType and dataId fields are supported.
   * 
   * *   To query the list of synthetic test results, set the key to taskType.
   * *   To query the result details of a synthetic monitoring task, set the key to dataId.
   * 
   * @example
   * taskType
   */
  key?: string;
  /**
   * @remarks
   * The type of the filter condition. Valid values: eq and in. eq: equal to. in: include.
   * 
   * @example
   * eq
   */
  opType?: string;
  /**
   * @remarks
   * The value of the filter condition. The type of the task. Valid values: 1: ICMP 2: TCP 3: DNS 4: HTTP 5: website speed measurement 6: file download
   * 
   * @example
   * 1
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      opType: 'OpType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      opType: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSyntheticDetailRequestExactFilters extends $dara.Model {
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * null
   */
  opType?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * null
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      opType: 'OpType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      opType: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSyntheticDetailRequest extends $dara.Model {
  /**
   * @remarks
   * An array of filter conditions. This parameter is required.
   * 
   * *   To query the list of synthetic test results, set this parameter in the following format: [{"Key":"taskType","OpType":"in","Value":[Task type]}].
   * *   To query the result details of a synthetic monitoring task, set this parameter in the following format: [{"Key":"dataId","OpType":"eq","Value":"dataId"}]. dataId is returned when you query the list of synthetic test results.
   */
  advancedFilters?: ListSyntheticDetailRequestAdvancedFilters[];
  /**
   * @remarks
   * The type of the results. Set the value to SYNTHETIC.
   * 
   * @example
   * SYNTHETIC
   */
  category?: string;
  /**
   * @remarks
   * The type of the list that contains the results. This parameter is required. Valid values:
   * 
   * *   ICMP_LIST
   * *   TCP_LIST
   * *   DNS_LIST
   * *   HTTP_LIST
   * *   WEBSITE_LIST
   * *   DOWNLOAD_LIST
   * *   ALL
   * 
   * @example
   * ICMP_LIST
   */
  detail?: string;
  /**
   * @remarks
   * The timestamp of the end time of the query. Unit: milliseconds.
   * 
   * @example
   * 1684480557772
   */
  endTime?: number;
  /**
   * @remarks
   * A reserved field.
   */
  exactFilters?: ListSyntheticDetailRequestExactFilters[];
  /**
   * @remarks
   * The filter condition. This parameter is required.
   * 
   * *   To query the result of a synthetic monitoring task, set this parameter in the following format: {"taskId":"${taskId}"}.
   * *   To query the result details of a synthetic monitoring task, set this parameter in the following format: {"taskId":"${taskId}","dataId":"${dataId}"}.
   */
  filters?: { [key: string]: string };
  /**
   * @remarks
   * The order in which results are sorted. Valid values:
   * 
   * - `ASC`: ascending order
   * - `DESC`: descending order
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The field based on which results are sorted. Set the value to timestamp.
   * 
   * @example
   * timestamp
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timestamp of the start time of the query. Unit: milliseconds.
   * 
   * @example
   * 1684110343127
   */
  startTime?: number;
  /**
   * @remarks
   * The type of the synthetic test. Valid values: 1 and 2. 1 represents an immediate test, and 2 represents a scheduled test.
   * 
   * @example
   * 1
   */
  syntheticType?: number;
  static names(): { [key: string]: string } {
    return {
      advancedFilters: 'AdvancedFilters',
      category: 'Category',
      detail: 'Detail',
      endTime: 'EndTime',
      exactFilters: 'ExactFilters',
      filters: 'Filters',
      order: 'Order',
      orderBy: 'OrderBy',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      syntheticType: 'SyntheticType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedFilters: { 'type': 'array', 'itemType': ListSyntheticDetailRequestAdvancedFilters },
      category: 'string',
      detail: 'string',
      endTime: 'number',
      exactFilters: { 'type': 'array', 'itemType': ListSyntheticDetailRequestExactFilters },
      filters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      order: 'string',
      orderBy: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
      syntheticType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.advancedFilters)) {
      $dara.Model.validateArray(this.advancedFilters);
    }
    if(Array.isArray(this.exactFilters)) {
      $dara.Model.validateArray(this.exactFilters);
    }
    if(this.filters) {
      $dara.Model.validateMap(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

