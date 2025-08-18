// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels extends $dara.Model {
  /**
   * @example
   * aig-0bxls9m9arax6****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-azn3kmwruh1vl****
   */
  appInstanceId?: string;
  /**
   * @example
   * p-0cc7s3mw2fg4j****
   */
  appInstancePersistentId?: string;
  /**
   * @example
   * test-persistent-name
   */
  appInstancePersistentName?: string;
  /**
   * @example
   * RUNNING
   */
  appInstancePersistentStatus?: string;
  /**
   * @example
   * RUNNING
   */
  appInstanceStatus?: string;
  authorizedUsers?: string[];
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  persistentAppInstanceModels?: ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
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

