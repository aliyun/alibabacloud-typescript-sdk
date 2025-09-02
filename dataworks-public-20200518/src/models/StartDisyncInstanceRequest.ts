// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDISyncInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * *   If you set TaskType to DI_REALTIME, set this parameter to the ID of the real-time synchronization task that you want to start.
   * *   If you set TaskType to DI_SOLUTION, set this parameter to the ID of the data synchronization solution that you want to start.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
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
   * *   If you set TaskType to DI_REALTIME, the StartParam parameter specifies the startup parameters for the real-time synchronization task. The startup parameters include failover-related parameters, the parameter that specifies the number of dirty data records allowed, and the parameters in the data definition language (DDL) statements.
   * *   If you set TaskType to DI_SOLUTION, the StartParam parameter does not take effect.
   * 
   * @example
   * {"failoverLimit":{"count":10,"interval":30},"errorLimit":{"record":0},"ddlMarkMap":{"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"IGNORE","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"NORMAL","DROPCOLUMN":"IGNORE","ADDCOLUMN":"NORMAL","RENAMETABLE":"CRITICAL"}}
   */
  startParam?: string;
  /**
   * @remarks
   * The type of the object that you want to start. Valid values:
   * 
   * *   DI_REALTIME: real-time synchronization task
   * *   DI_SOLUTION: data synchronization solution
   * 
   * This parameter is required.
   * 
   * @example
   * DI_REALTIME
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      startParam: 'StartParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      startParam: 'string',
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

