// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishFlowVersionRequest extends $dara.Model {
  /**
   * @example
   * example flow description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example-flow-name
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

