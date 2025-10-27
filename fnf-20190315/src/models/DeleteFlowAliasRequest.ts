// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFlowAliasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my_flow_name
   */
  flowName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alias_name
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

