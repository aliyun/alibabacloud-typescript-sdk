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

