// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementServiceVersionsResponseBodyRecallManagementServiceVersions extends $dara.Model {
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @example
   * version-1
   */
  name?: string;
  /**
   * @example
   * 1
   */
  recallManagementServiceVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefault: 'IsDefault',
      name: 'Name',
      recallManagementServiceVersionId: 'RecallManagementServiceVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefault: 'string',
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
  recallManagementServiceVersions?: ListRecallManagementServiceVersionsResponseBodyRecallManagementServiceVersions[];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
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

