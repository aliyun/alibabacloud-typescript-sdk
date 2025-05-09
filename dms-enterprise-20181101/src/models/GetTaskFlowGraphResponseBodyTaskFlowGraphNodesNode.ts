// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskFlowGraphResponseBodyTaskFlowGraphNodesNode extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * The position of the node in the DAG.
   * 
   * @example
   * {\\"x\\":541,\\"y\\":322,\\"layoutType\\":\\"Horizontal\\"}
   */
  graphParam?: string;
  /**
   * @remarks
   * The advanced configuration of the node.
   */
  nodeConfig?: string;
  /**
   * @remarks
   * The configuration of the node.
   * 
   * @example
   * {ODI3OTNRVC****UHVFT29"}
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 44***
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the node. For more information about the valid values for this parameter, see [NodeType parameter](https://help.aliyun.com/document_detail/424705.html).
   * 
   * @example
   * 36
   */
  nodeType?: number;
  /**
   * @remarks
   * The time variables for the node.
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
      nodeId: 'NodeId',
      nodeName: 'NodeName',
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
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'number',
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

