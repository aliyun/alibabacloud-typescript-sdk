// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * flow-0bf98338eb1f4d10ad6a
   */
  flowId?: string;
  /**
   * @example
   * 2
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

