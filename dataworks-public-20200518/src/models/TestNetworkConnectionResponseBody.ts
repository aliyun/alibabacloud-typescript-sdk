// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestNetworkConnectionResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The reason why the data source and resource group failed the connectivity test. If data source and the resource group passed the connectivity test, this parameter is left empty.
   * 
   * @example
   * Connectable
   */
  connectMessage?: string;
  /**
   * @remarks
   * The result of the connectivity test. Valid values:
   * 
   * *   true: The data source and the resource group passed the connectivity test.
   * *   false: The data source and the resource group failed the connectivity test. You can troubleshoot issues based on the ConnectMessage parameter.
   * 
   * @example
   * true
   */
  connectStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectMessage: 'ConnectMessage',
      connectStatus: 'ConnectStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectMessage: 'string',
      connectStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestNetworkConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0000-ABCD-EFG
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The information about the connectivity test.
   */
  taskList?: TestNetworkConnectionResponseBodyTaskList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskList: TestNetworkConnectionResponseBodyTaskList,
    };
  }

  validate() {
    if(this.taskList && typeof (this.taskList as any).validate === 'function') {
      (this.taskList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

