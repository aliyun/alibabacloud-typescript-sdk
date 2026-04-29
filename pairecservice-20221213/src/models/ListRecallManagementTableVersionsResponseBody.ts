// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementTableVersionsResponseBodyRecallManagementTableVersions extends $dara.Model {
  /**
   * @example
   * ds=20250701
   */
  dataVersion?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132
   */
  effectiveTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132
   */
  publishEndTime?: string;
  /**
   * @example
   * 2021-12-15T22:24:33.132
   */
  publishStartTime?: string;
  /**
   * @example
   * 202507010000
   */
  recallManagementTableVersionId?: string;
  /**
   * @example
   * 1000
   */
  sourceTableDataSize?: number;
  /**
   * @example
   * 100
   */
  sourceTableRowCount?: number;
  /**
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
  recallManagementTableVersions?: ListRecallManagementTableVersionsResponseBodyRecallManagementTableVersions[];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
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

