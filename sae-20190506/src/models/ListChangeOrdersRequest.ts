// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 145341c-9708-4967-b3ec-24933767****
   */
  appId?: string;
  /**
   * @remarks
   * The status of the change order. Valid values:
   * 
   * - **0**: Preparing.
   * 
   * - **1**: In progress.
   * 
   * - **2**: Succeeded.
   * 
   * - **3**: Failed.
   * 
   * - **6**: Stopped.
   * 
   * - **8**: Paused for manual confirmation.
   * 
   * - **9**: Paused for automatic confirmation.
   * 
   * - **10**: Failed due to a system exception.
   * 
   * - **11**: Pending approval.
   * 
   * - **12**: Approved and pending execution.
   * 
   * @example
   * 2
   */
  coStatus?: string;
  /**
   * @remarks
   * The type of the change order. Valid values:
   * 
   * - **CoBindSlb**: Attach an SLB instance.
   * 
   * - **CoUnbindSlb**: Detach an SLB instance.
   * 
   * - **CoCreateApp**: Create an application.
   * 
   * - **CoDeleteApp**: Delete an application.
   * 
   * - **CoDeploy**: Deploy an application.
   * 
   * - **CoRestartApplication**: Restart an application.
   * 
   * - **CoRollback**: Roll back an application.
   * 
   * - **CoScaleIn**: Scale in an application.
   * 
   * - **CoScaleOut**: Scale out an application.
   * 
   * - **CoStartApplication**: Start an application.
   * 
   * - **CoStopApplication**: Stop an application.
   * 
   * - **CoRescaleApplicationVertically**: Change the instance type.
   * 
   * - **CoDeployHistroy**: Roll back to a previous version.
   * 
   * - **CoBindNas**: Attach a NAS file system.
   * 
   * - **CoUnbindNas**: Detach a NAS file system.
   * 
   * - **CoBatchStartApplication**: Batch start applications.
   * 
   * - **CoBatchStopApplication**: Batch stop applications.
   * 
   * - **CoRestartInstances**: Restart instances.
   * 
   * - **CoDeleteInstances**: Delete instances.
   * 
   * - **CoScaleInAppWithInstances**: Scale in an application by specifying instances.
   * 
   * @example
   * CoCreateApp
   */
  coType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword for a fuzzy search of change order descriptions. The operation returns only the change orders whose descriptions contain the **keyword**.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order for the field specified by the **OrderBy** parameter. Valid values:
   * 
   * - **true**: The results are sorted in ascending order.
   * 
   * - **false**: The results are sorted in descending order.
   */
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

