// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeIORequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the information about ancestor or descendant nodes of the current node. Valid values: input and output.
   * 
   * This parameter is required.
   * 
   * @example
   * output
   */
  ioType?: string;
  /**
   * @remarks
   * The node ID. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The runtime environment. Valid values: DEV and PROD.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      ioType: 'IoType',
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioType: 'string',
      nodeId: 'number',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

