// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FunctionDefinition } from "./FunctionDefinition";


export class FunctionChange extends $dara.Model {
  /**
   * @remarks
   * The change type.
   * 
   * @example
   * setOption
   */
  action?: string;
  /**
   * @remarks
   * required in UpdateFunctionComment
   * 
   * @example
   * Function configuration update
   */
  comment?: string;
  /**
   * @remarks
   * required in AddDefinition/UpdateDefinition
   */
  definition?: FunctionDefinition;
  /**
   * @remarks
   * required in SetFunctionOption/RemoveFunctionOption
   * 
   * @example
   * namespaceSchema
   */
  key?: string;
  /**
   * @remarks
   * required in AddDefinition/UpdateDefinition/DropDefinition
   * 
   * @example
   * my_function
   */
  name?: string;
  /**
   * @remarks
   * required in SetFunctionOption
   * 
   * @example
   * IDC_MOVE
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      comment: 'comment',
      definition: 'definition',
      key: 'key',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      definition: FunctionDefinition,
      key: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.definition && typeof (this.definition as any).validate === 'function') {
      (this.definition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

