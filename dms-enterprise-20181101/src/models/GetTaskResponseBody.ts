// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow to which the node belongs.
   * 
   * @example
   * 7321
   */
  dagId?: number;
  /**
   * @remarks
   * The position of the node on the Directed Acyclic Graph (DAG).
   * 
   * @example
   * {"{\\"x\\":0,\\"y\\":0,\\"layoutType\\":\\"Horizontal\\"}",  "id": 51***}
   */
  graphParam?: string;
  /**
   * @remarks
   * The advanced configuration for the node.
   */
  nodeConfig?: string;
  /**
   * @remarks
   * The configuration for the node.
   * 
   * @example
   * {\\"dbList\\":[{\\"instanceId\\":177****}"   }
   */
  nodeContent?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Cross-database Spark SQL-1
   */
  nodeName?: string;
  /**
   * @remarks
   * The output variables for the node. This parameter is available only for some types of nodes.
   * 
   * @example
   * { "outputs":[ "extractMethod":"json" , "variableName":"var",   "description":"demo desc" } ] }
   */
  nodeOutput?: string;
  /**
   * @remarks
   * The type of the node. For more information about the valid values for this parameter, see [NodeType parameter](https://help.aliyun.com/document_detail/424705.html).
   * 
   * @example
   * SPARK_SQL
   */
  nodeType?: string;
  /**
   * @remarks
   * The time variables configured for the node.
   * 
   * @example
   * {\\"variables\\":[{\\"name\\":\\"Today\\",\\"pattern\\":\\"yyyy-MM-dd|+1d\\"}]}
   */
  timeVariables?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      graphParam: 'GraphParam',
      nodeConfig: 'NodeConfig',
      nodeContent: 'NodeContent',
      nodeName: 'NodeName',
      nodeOutput: 'NodeOutput',
      nodeType: 'NodeType',
      timeVariables: 'TimeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      graphParam: 'string',
      nodeConfig: 'string',
      nodeContent: 'string',
      nodeName: 'string',
      nodeOutput: 'string',
      nodeType: 'string',
      timeVariables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 7838266C-E17B-58F4-B072-4DC356B58258
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task node.
   */
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      task: GetTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

