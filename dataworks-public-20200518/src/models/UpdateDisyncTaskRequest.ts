// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDISyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data synchronization task. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID. You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The updated configurations of the data synchronization task. Calling this API operation to update a data synchronization task is equivalent to updating a data synchronization task by using the code editor in the DataWorks console. For more information, see [Create a synchronization task by using the code editor](https://help.aliyun.com/document_detail/137717.html). You can call the UpdateDISyncTask operation to update only batch synchronization tasks. If you do not need to update the configurations of the data synchronization task, leave this parameter empty.
   * 
   * @example
   * {"type":"job","version":"2.0","steps":[{"stepType":"mysql","parameter":{"envType":1,"datasource":"mysql_pub","column":["id","name","create_time","age","score","t_01"],"connection":[{"datasource":"mysql_pub","table":["u_pk"]}],"where":"","splitPk":"id","encoding":"UTF-8"},"name":"Reader","category":"reader"},{"stepType":"odps","parameter":{"partition":"pt=${bizdate}","truncate":true,"datasource":"odps_first","envType":1,"column":["id","name","create_time","age","score","t_01"],"emptyAsNull":false,"tableComment":"null","table":"u_pk"},"name":"Writer","category":"writer"}],"setting":{"executeMode":null,"errorLimit":{"record":""},"speed":{"concurrent":2,"throttle":false}},"order":{"hops":[{"from":"Reader","to":"Writer"}]}}
   */
  taskContent?: string;
  /**
   * @remarks
   * The configuration parameters of the data synchronization task. You must configure this parameter in the JSON format.
   * 
   * *   ResourceGroup: the identifier of the resource group for Data Integration that is used by the data synchronization task. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the identifier of the resource group.
   * *   Cu: the specifications occupied by the data synchronization task in the serverless resource group. The value of this parameter must be a multiple of 0.5.
   * 
   * @example
   * {"ResourceGroup":"S_res_group_XXX_XXXX"}
   */
  taskParam?: string;
  /**
   * @remarks
   * The type of the data synchronization task. Set the value to DI_OFFLINE. You can call the UpdateDISyncTask operation to update only batch synchronization tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * DI_OFFLINE
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskContent: 'TaskContent',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskContent: 'string',
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

