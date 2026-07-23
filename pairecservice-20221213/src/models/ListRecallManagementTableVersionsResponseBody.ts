// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementTableVersionsResponseBodyRecallManagementTableVersions extends $dara.Model {
  /**
   * @remarks
   * The data version.
   * 
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @remarks
   * The effective time.
   * 
   * @example
   * 2021-12-15T23:24:33.132
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The sync end time.
   * 
   * @example
   * 2021-12-15T23:24:33.132
   */
  publishEndTime?: string;
  /**
   * @remarks
   * The sync start time.
   * 
   * @example
   * 2021-12-15T22:24:33.132
   */
  publishStartTime?: string;
  /**
   * @remarks
   * The ID of the RecallManagementTable version.
   * 
   * @example
   * 202507010000
   */
  recallManagementTableVersionId?: string;
  /**
   * @remarks
   * The source table data size.
   * 
   * @example
   * 1000
   */
  sourceTableDataSize?: number;
  /**
   * @remarks
   * The source table row count.
   * 
   * @example
   * 100
   */
  sourceTableRowCount?: number;
  /**
   * @remarks
   * The status of the version. Valid values:
   * 
   * - Online: The version is online.
   * 
   * - Offline: The version is offline.
   * 
   * @example
   * Online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataVersion: 'DataVersion',
      effectiveTime: 'EffectiveTime',
      publishEndTime: 'PublishEndTime',
      publishStartTime: 'PublishStartTime',
      recallManagementTableVersionId: 'RecallManagementTableVersionId',
      sourceTableDataSize: 'SourceTableDataSize',
      sourceTableRowCount: 'SourceTableRowCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataVersion: 'string',
      effectiveTime: 'string',
      publishEndTime: 'string',
      publishStartTime: 'string',
      recallManagementTableVersionId: 'string',
      sourceTableDataSize: 'number',
      sourceTableRowCount: 'number',
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

export class ListRecallManagementTableVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of RecallManagementTable versions.
   */
  recallManagementTableVersions?: ListRecallManagementTableVersionsResponseBodyRecallManagementTableVersions[];
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
   * The total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      recallManagementTableVersions: 'RecallManagementTableVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recallManagementTableVersions: { 'type': 'array', 'itemType': ListRecallManagementTableVersionsResponseBodyRecallManagementTableVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recallManagementTableVersions)) {
      $dara.Model.validateArray(this.recallManagementTableVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

