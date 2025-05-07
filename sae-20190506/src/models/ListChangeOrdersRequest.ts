// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   * 
   * @example
   * 145341c-9708-4967-b3ec-24933767****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2
   */
  coStatus?: string;
  /**
   * @remarks
   * The type of the change order. Valid values:
   * 
   * *   **CoBindSlb**: associates the Server Load Balancer (SLB) instance with the application.
   * *   **CoUnbindSlb**: disassociates an SLB instance from the application.
   * *   **CoCreateApp**: creates the application.
   * *   **CoDeleteApp**: deletes the application.
   * *   **CoDeploy**: deploys the application.
   * *   **CoRestartApplication**: restarts the application.
   * *   **CoRollback**: rolls back the application.
   * *   **CoScaleIn**: scales in the application.
   * *   **CoScaleOut**: scales out the application.
   * *   **CoStartApplication**: starts the application.
   * *   **CoStopApplication**: stops the application.
   * *   **CoRescaleApplicationVertically**: modifies the instance type.
   * *   **CoDeployHistroy**: rolls back the application to an earlier version.
   * *   **CoBindNas**: associates a network-attached storage (NAS) file system with the application.
   * *   **CoUnbindNas**: disassociates a NAS file system from the application.
   * *   **CoBatchStartApplication**: starts multiple applications concurrently.
   * *   **CoBatchStopApplication**: stops multiple applications concurrently.
   * *   **CoRestartInstances**: restarts the instance.
   * *   **CoDeleteInstances**: deletes the instance.
   * *   **CoScaleInAppWithInstances**: reduces the specified number of application instances.
   * 
   * @example
   * CoCreateApp
   */
  coType?: string;
  /**
   * @remarks
   * 20
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * CoCreateApp
   * 
   * @example
   * test
   */
  key?: string;
  orderBy?: string;
  /**
   * @remarks
   * test
   * 
   * @example
   * 20
   */
  pageSize?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      coStatus: 'CoStatus',
      coType: 'CoType',
      currentPage: 'CurrentPage',
      key: 'Key',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      coStatus: 'string',
      coType: 'string',
      currentPage: 'number',
      key: 'string',
      orderBy: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

