// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunApplicationActionResponseBodyAbnInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the abnormal node.
   * 
   * @example
   * i-bp1cudc25w2bfwl5****
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the abnormal node.
   * 
   * @example
   * core1-1
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

