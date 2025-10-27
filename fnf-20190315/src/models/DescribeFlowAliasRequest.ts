// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowAliasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example-flow-name
   */
  flowName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example-alias-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

