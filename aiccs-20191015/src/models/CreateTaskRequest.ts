// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Call string (callee information and parameter list). Valid values:
   * 
   * - **LIST**: `05715678****,05715679****`
   * - **JSON**: `{"ParamNames":["name","age"],"CalleeList":[{"Callee":"1810000****","Params":["Zhang San","20"]},{"Callee":"1810001****","Params":["Li Si","21"]}]}`. In this example, ParamNames represents the List of Parameter Names; Params represents the List of parameter values.
   * 
   * > - The order of the Parameter Name List and the parameter value List must correspond.  
   * - A maximum of 1 000 callee numbers is allowed.
   * 
   * @example
   * {"ParamNames":["name","age"],"CalleeList":[{"Callee":"1810000****","Params":["张三","20"]},{"Callee":"1810001****","Params":["李四","21"]}]}
   */
  callString?: string;
  /**
   * @remarks
   * Call string type. Valid values:  
   * - **LIST**  
   * - **JSON**
   * 
   * This parameter is required.
   * 
   * @example
   * JSON
   */
  callStringType?: string;
  /**
   * @remarks
   * Outbound caller number.
   * 
   * > The number must be a purchased number. Separate multiple numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****5678,0571****5679
   */
  caller?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Retry Count.
   * 
   * @example
   * 2
   */
  retryCount?: number;
  /**
   * @remarks
   * Whether to enable automatic retry. Valid values:
   * 
   * - **1**: Retry.
   * - **0**: No retry.
   * 
   * @example
   * 1
   */
  retryFlag?: number;
  /**
   * @remarks
   * Retry interval. Unit: minute. Must be greater than 1.
   * 
   * @example
   * 2
   */
  retryInterval?: number;
  /**
   * @remarks
   * Call statuses that require redialing. Separate multiple statuses with commas (,). Valid values:  
   * - **200010**: Power off  
   * - **200011**: Service suspended  
   * - **200002**: Busy  
   * - **200012**: Call failed  
   * - **200005**: Unable to connect  
   * - **200003**: No acknowledgement
   * 
   * @example
   * 200010,200011
   */
  retryStatusCode?: string;
  /**
   * @remarks
   * ID of the specified robot (script ID), indicating which robot script to use for initiating calls.  
   * 
   * You can obtain the script ID on the [Script Management](https://aiccs.console.aliyun.com/patter/list) page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  robotId?: string;
  /**
   * @remarks
   * Concurrency (number of agents).
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  seatCount?: string;
  /**
   * @remarks
   * Indicates whether to start immediately.  
   * - **true**: Yes.  
   * - **false**: No.
   * 
   * @example
   * 是
   */
  startNow?: boolean;
  /**
   * @remarks
   * Task Name. Supports Chinese and English characters. Length: 0 to 30 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试任务
   */
  taskName?: string;
  /**
   * @remarks
   * Work day. Valid values:
   * 
   * - **1**: Monday.
   * - **2**: Tuesday.
   * - **3**: Wednesday.
   * - **4**: Thursday.
   * - **5**: Friday.
   * - **6**: Saturday.
   * - **7**: Sunday.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workDay?: string;
  /**
   * @remarks
   * List of working hours (accurate to the minute).
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00-12:00,13:00-14:00
   */
  workTimeList?: string;
  static names(): { [key: string]: string } {
    return {
      callString: 'CallString',
      callStringType: 'CallStringType',
      caller: 'Caller',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retryCount: 'RetryCount',
      retryFlag: 'RetryFlag',
      retryInterval: 'RetryInterval',
      retryStatusCode: 'RetryStatusCode',
      robotId: 'RobotId',
      seatCount: 'SeatCount',
      startNow: 'StartNow',
      taskName: 'TaskName',
      workDay: 'WorkDay',
      workTimeList: 'WorkTimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callString: 'string',
      callStringType: 'string',
      caller: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retryCount: 'number',
      retryFlag: 'number',
      retryInterval: 'number',
      retryStatusCode: 'string',
      robotId: 'string',
      seatCount: 'string',
      startNow: 'boolean',
      taskName: 'string',
      workDay: 'string',
      workTimeList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

