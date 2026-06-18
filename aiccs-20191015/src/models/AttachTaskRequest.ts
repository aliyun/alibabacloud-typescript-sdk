// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The calling string (callee information and parameter list). Valid values:
   * 
   * - **LIST**: Use this type when the script has no input variables. In this case, only the callee numbers need to be provided. Example: `0571****5678,0571****5679`.
   * - **JSON**: Use this type when the script includes input variables. You must provide the variable names, callee numbers, and variable values. Example: `{"ParamNames":["name","age"],"CalleeList":[{"Callee":"181****0000","Params":["Zhang San","20"]},{"Callee":"181****0001","Params":["Li Si","21"]}]}`. **ParamNames** represents the list of parameter names; **Params** represents the list of parameter values.
   * 
   * > You can view the script input variables on the [**Script Management**](https://aiccs.console.aliyun.com/patter/list) > **View** > **Input and Output Parameters** interface.
   * 
   * @example
   * {
   *   "ParamNames": [
   *     "name",
   *     "age"
   *   ],
   *   "CalleeList": [
   *     {
   *       "Callee": "181****0000",
   *       "Params": [
   *         "张三",
   *         "20"
   *       ]
   *     },
   *     {
   *       "Callee": "181****0001",
   *       "Params": [
   *         "李四",
   *         "21"
   *       ]
   *     }
   *   ]
   * }
   */
  callString?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The job ID. You can obtain the job ID from the [Task Management](https://aiccs.console.aliyun.com/job/list) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      callString: 'CallString',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callString: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

