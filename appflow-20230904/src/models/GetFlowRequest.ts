// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * flow-xxxxx
   */
  flowId?: string;
  /**
   * @example
   * 6
   */
  flowVersion?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowVersion: 'FlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

