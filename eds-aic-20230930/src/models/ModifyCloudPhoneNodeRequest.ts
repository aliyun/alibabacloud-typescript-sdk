// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudPhoneNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name that you want to assign to the cloud phone matrix.
   * 
   * @example
   * node_name_new
   */
  newNodeName?: string;
  /**
   * @remarks
   * The ID of the cloud phone matrix.
   * 
   * @example
   * cpn-0ugbptfu473fy****
   */
  nodeId?: string;
  /**
   * @remarks
   * Specifies the streaming mode for instances in the cloud phone matrix. If this parameter is left empty, the exclusive mode is used.
   * 
   * @example
   * 1
   */
  streamMode?: number;
  static names(): { [key: string]: string } {
    return {
      newNodeName: 'NewNodeName',
      nodeId: 'NodeId',
      streamMode: 'StreamMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newNodeName: 'string',
      nodeId: 'string',
      streamMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

