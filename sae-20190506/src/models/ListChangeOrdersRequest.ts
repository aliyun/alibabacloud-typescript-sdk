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
   * - **0**: preparing
   * - **1**: executing
   * - **2**: executed successfully
   * - **3**: execution failed
   * - **6**: terminated
   * - **8**: waiting for manual batch confirmation
   * - **9**: waiting for automatic batch confirmation
   * - **10**: execution failed due to a system exception
   * - **11**: waiting for approval
   * - **12**: approved and waiting for execution
   * 
   * @example
   * 2
   */
  coStatus?: string;
  /**
   * @remarks
   * The type of the change order. Valid values:
   * 
   * - **CoBindSlb**: bind an SLB instance
   * - **CoUnbindSlb**: unbind an SLB instance
   * - **CoCreateApp**: create an application
   * - **CoDeleteApp**: delete an application
   * - **CoDeploy**: deploy an application
   * - **CoRestartApplication**: restart an application
   * - **CoRollback**: roll back an application
   * - **CoScaleIn**: scale in an application
   * - **CoScaleOut**: scale out an application
   * - **CoStartApplication**: start an application
   * - **CoStopApplication**: stop an application
   * - **CoRescaleApplicationVertically**: change instance specifications
   * - **CoDeployHistroy**: roll back to a historical version
   * - **CoBindNas**: bind a NAS file system
   * - **CoUnbindNas**: unbind a NAS file system
   * - **CoBatchStartApplication**: start applications in batches
   * - **CoBatchStopApplication**: stop applications in batches
   * - **CoRestartInstances**: restart instances
   * - **CoDeleteInstances**: delete instances
   * - **CoScaleInAppWithInstances**: scale in specified instances
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
   * The keyword used for fuzzy match of the change order description. Change orders whose descriptions contain the keyword are returned.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The sorting condition.
   * 
   * @example
   * create_time
   */
  orderBy?: string;
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
   * Specifies whether to sort the results in ascending order based on the field specified by the **OrderBy** parameter. Valid values:
   * 
   *   - **true**: sort in ascending order
   *   - **false**: sort in descending order
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

