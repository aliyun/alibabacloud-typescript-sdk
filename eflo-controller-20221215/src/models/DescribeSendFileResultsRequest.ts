// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSendFileResultsRequest extends $dara.Model {
  /**
   * @remarks
   * Command execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t-bj038i0d6r8zoqo
   */
  invokeId?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

