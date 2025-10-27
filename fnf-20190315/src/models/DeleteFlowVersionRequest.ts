// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFlowVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example-flow
   */
  flowName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      flowVersion: 'FlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
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

