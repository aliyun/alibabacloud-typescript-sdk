// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDISyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. This parameter can be left empty.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskContent?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * @example
   * new_di_task
   */
  taskName?: string;
  /**
   * @remarks
   * The configuration parameters of the data synchronization task. The following parameters are supported:
   * 
   * *   FileFolderPath: the storage path of the data synchronization task.
   * *   ResourceGroup: the identifier of the resource group for Data Integration that is used by the data synchronization task. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the identifier of the resource group.
   * *   Cu: the specifications occupied by the data synchronization task in the serverless resource group. The value of this parameter must be a multiple of 0.5.
   * 
   * @example
   * {"FileFolderPath":"Business Flow/XXX/Data Integration","ResourceGroup":"S_res_group_XXX_XXXX"}
   */
  taskParam?: string;
  /**
   * @remarks
   * The type of the data synchronization task. Valid values: DI_OFFLINE, DI_REALTIME, and DI_SOLUTION.
   * 
   * This parameter is required.
   * 
   * @example
   * DI_OFFLINE
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      taskContent: 'TaskContent',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      taskContent: 'string',
      taskName: 'string',
      taskParam: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

