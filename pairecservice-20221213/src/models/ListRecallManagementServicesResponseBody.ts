// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementServicesResponseBodyRecallManagementServices extends $dara.Model {
  /**
   * @remarks
   * The ID of the active recall management service version.
   * 
   * @example
   * 1
   */
  currentRecallManagementServiceVersionId?: string;
  /**
   * @remarks
   * The name of the active recall management service version.
   * 
   * @example
   * version-1
   */
  currentRecallManagementServiceVersionName?: string;
  /**
   * @remarks
   * The description of the recall management service.
   * 
   * @example
   * this is a test recall
   */
  description?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format, including the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format, including the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The name of the recall management service.
   * 
   * @example
   * hot_group_recall
   */
  name?: string;
  /**
   * @remarks
   * The ID of the recall management service.
   * 
   * @example
   * 3
   */
  recallManagementServiceId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - Online: online.
   * - Offline: offline.
   * 
   * @example
   * Online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentRecallManagementServiceVersionId: 'CurrentRecallManagementServiceVersionId',
      currentRecallManagementServiceVersionName: 'CurrentRecallManagementServiceVersionName',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      recallManagementServiceId: 'RecallManagementServiceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentRecallManagementServiceVersionId: 'string',
      currentRecallManagementServiceVersionName: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      recallManagementServiceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecallManagementServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The recall management services.
   */
  recallManagementServices?: ListRecallManagementServicesResponseBodyRecallManagementServices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recallManagementServices: 'RecallManagementServices',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      recallManagementServices: { 'type': 'array', 'itemType': ListRecallManagementServicesResponseBodyRecallManagementServices },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recallManagementServices)) {
      $dara.Model.validateArray(this.recallManagementServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

