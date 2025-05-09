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

