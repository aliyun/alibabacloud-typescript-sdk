// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The call string, which includes the callee information and parameter list. Valid values:
   * 
   * - **LIST**: used when the script has no input variables. You only need to pass the called numbers. Example: `0571****5678,0571****5679`.
   * - **JSON**: used when the script has input variables. You need to pass the variable names, called numbers, and variable values. Example: `{"ParamNames":["name","age"],"CalleeList":[{"Callee":"181****0000","Params":["Zhang San","20"]},{"Callee":"181****0001","Params":["Li Si","21"]}]}`. **ParamNames** specifies the list of parameter names. **Params** specifies the list of parameter values.
   * > You can view the script input variables on the [**Script Management**](https://aiccs.console.aliyun.com/patter/list) > **View** > **Input and Output Parameters** page.
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
   *         "Zhang San",
   *         "20"
   *       ]
   *     },
   *     {
   *       "Callee": "181****0001",
   *       "Params": [
   *         "Li Si",
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
   * The task ID. You can obtain the task ID on the [Task Management](https://aiccs.console.aliyun.com/job/list) page.
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

