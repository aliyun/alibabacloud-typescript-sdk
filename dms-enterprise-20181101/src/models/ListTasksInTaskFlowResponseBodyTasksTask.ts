// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksInTaskFlowResponseBodyTasksTask extends $dara.Model {
  /**
   * @remarks
   * The position of the node on the Directed Acyclic Graph (DAG).
   * 
   * @example
   * {\\"x\\":435,\\"y\\":192,\\"layoutType\\":\\"Horizontal\\"}
   */
  graphParam?: string;
  /**
   * @remarks
   * The advanced configuration for the node.
   * 
   * @example
   * {     "rerun":{    "rerunEnable":true,      "rerunCount":1,   "rerunInterval":10 //  }}
   */
  nodeConfig?: string;
  /**
   * @remarks
   * The configuration for the node.
   * 
   * @example
   * {     "dbId":123***,  "sql":"",    "dbType":"polardb" }
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 92***
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Cross-Database Spark SQL-1
   */
  nodeName?: string;
  /**
   * @remarks
   * The output variables for the task.
   * 
   * @example
   * {  "outputs":[{ { "row":0, "column":-1,                  "combiner":"," }            "extractMethod":"{\\"row\\":0,\\"column\\":-1,\\"combiner\\":\\",\\"}",         "variableName":"var",    "description":"For demo"} ] }
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
   * {\\"variables\\":[{\\"name\\":\\"test1\\",\\"pattern\\":\\"yyyy-MM-dd
   */
  timeVariables?: string;
  static names(): { [key: string]: string } {
    return {
      graphParam: 'GraphParam',
      nodeConfig: 'NodeConfig',
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutput: 'NodeOutput',
      nodeType: 'NodeType',
      timeVariables: 'TimeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphParam: 'string',
      nodeConfig: 'string',
      nodeContent: 'string',
      nodeId: 'string',
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

