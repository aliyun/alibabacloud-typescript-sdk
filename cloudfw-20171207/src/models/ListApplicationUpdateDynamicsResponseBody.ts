// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationUpdateDynamicsResponseBodyDynamicsApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the application in the built-in application signature library.
   * 
   * @example
   * 10012150000
   */
  applicationId?: number;
  /**
   * @remarks
   * The name of the application. The name is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * DingTalk
   */
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      applicationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationUpdateDynamicsResponseBodyDynamics extends $dara.Model {
  /**
   * @remarks
   * The list of applications added or updated in this update.
   */
  applications?: ListApplicationUpdateDynamicsResponseBodyDynamicsApplications[];
  /**
   * @remarks
   * The update description. The description is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * Added 1 application signature library, such as DingTalk
   */
  dynamicInfo?: string;
  /**
   * @remarks
   * The time when the signature library was updated. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731465600
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      dynamicInfo: 'DynamicInfo',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationUpdateDynamicsResponseBodyDynamicsApplications },
      dynamicInfo: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationUpdateDynamicsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of update records for the application signature library, sorted in descending order of update time.
   */
  dynamics?: ListApplicationUpdateDynamicsResponseBodyDynamics[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of update records that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dynamics: 'Dynamics',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamics: { 'type': 'array', 'itemType': ListApplicationUpdateDynamicsResponseBodyDynamics },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dynamics)) {
      $dara.Model.validateArray(this.dynamics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

