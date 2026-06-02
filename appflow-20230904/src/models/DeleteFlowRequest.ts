// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * flow-xxxxxxxxx
   */
  flowId?: string;
  /**
   * @example
   * 8
   */
  flowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowVersion: 'FlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

