// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VariablesValue } from "./VariablesValue";


export class ModifyAdvanceConfigFileRequest extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * "ha3"
   */
  content?: string;
  /**
   * @remarks
   * The variables.
   */
  variables?: { [key: string]: VariablesValue };
  /**
   * @remarks
   * The name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * /qrs.json
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      variables: 'variables',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': VariablesValue },
      fileName: 'string',
    };
  }

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

