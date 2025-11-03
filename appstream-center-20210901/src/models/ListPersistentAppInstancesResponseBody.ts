// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-0bxls9m9arax6****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the app instance.
   * 
   * @example
   * ai-azn3kmwruh1vl****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The ID of the app instance of the persistent session type.
   * 
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The name of the app instance of the persistent session type.
   * 
   * @example
   * test-persistent-name
   */
  appInstancePersistentName?: string;
  /**
   * @remarks
   * The status of the app instance of the persistent session type.
   * 
   * Valid values:
   * 
   * *   STARTING
   * *   RUNNING
   * *   STOPPED
   * *   UNAVAILABLE
   * *   DELETING
   * *   PENDING
   * *   STOPPING
   * *   DELETED
   * *   REBUILDING
   * 
   * @example
   * RUNNING
   */
  appInstancePersistentStatus?: string;
  /**
   * @remarks
   * The status of the app instance.
   * 
   * Valid values:
   * 
   * *   INIT: The app instance is being initialized.
   * *   STARTING: The app instance is being started.
   * *   CLOSING: The app instance is being stopped.
   * *   CLOSED: The app instance is closed.
   * *   RUNNING: The app instance is running.
   * *   idle: The app instance is idle.
   * *   BOUND: The app instance is bound to an app instance group.
   * *   UNAVAILABLE: The app instance is unavailable.
   * *   DELETED: The app instance is deleted.
   * 
   * @example
   * RUNNING
   */
  appInstanceStatus?: string;
  /**
   * @remarks
   * The authorized users.
   */
  authorizedUsers?: string[];
  /**
   * @remarks
   * The time when the app instance was created.
   * 
   * @example
   * 2025-03-13T03:22:18.000+00:00
   */
  gmtCreate?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      appInstancePersistentName: 'AppInstancePersistentName',
      appInstancePersistentStatus: 'AppInstancePersistentStatus',
      appInstanceStatus: 'AppInstanceStatus',
      authorizedUsers: 'AuthorizedUsers',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      appInstancePersistentName: 'string',
      appInstancePersistentStatus: 'string',
      appInstanceStatus: 'string',
      authorizedUsers: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizedUsers)) {
      $dara.Model.validateArray(this.authorizedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersistentAppInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The app instances of the persistent session type.
   */
  persistentAppInstanceModels?: ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      persistentAppInstanceModels: 'PersistentAppInstanceModels',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      persistentAppInstanceModels: { 'type': 'array', 'itemType': ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.persistentAppInstanceModels)) {
      $dara.Model.validateArray(this.persistentAppInstanceModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

