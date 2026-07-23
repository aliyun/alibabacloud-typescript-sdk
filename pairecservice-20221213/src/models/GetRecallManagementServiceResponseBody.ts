// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the active version of the recall management service.
   * 
   * @example
   * 1
   */
  currentRecallManagementServiceVersionId?: string;
  /**
   * @remarks
   * The name of the active version of the recall management service.
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
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
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
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the recall management service. Valid values:
   * 
   * - Online: The service is running and available.
   * 
   * - Offline: The service is stopped or unavailable.
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

