// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementServiceVersionsResponseBodyRecallManagementServiceVersions extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time. The time follows the ISO 8601 standard and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the version is effective.
   */
  isEffective?: boolean;
  /**
   * @remarks
   * The name of the recall management service version.
   * 
   * @example
   * version-1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the recall management service version.
   * 
   * @example
   * 1
   */
  recallManagementServiceVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isEffective: 'IsEffective',
      name: 'Name',
      recallManagementServiceVersionId: 'RecallManagementServiceVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isEffective: 'boolean',
      name: 'string',
      recallManagementServiceVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecallManagementServiceVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of recall management service versions.
   */
  recallManagementServiceVersions?: ListRecallManagementServiceVersionsResponseBodyRecallManagementServiceVersions[];
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
   * The total number of returned entries.
   * 
   * @example
   * 30
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      recallManagementServiceVersions: 'RecallManagementServiceVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recallManagementServiceVersions: { 'type': 'array', 'itemType': ListRecallManagementServiceVersionsResponseBodyRecallManagementServiceVersions },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recallManagementServiceVersions)) {
      $dara.Model.validateArray(this.recallManagementServiceVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

