// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigValueFilesConfigVariablesValue } from "./ConfigValueFilesConfigVariablesValue";


export class ConfigValueFilesConfig extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * $dictContent
   */
  content?: string;
  /**
   * @remarks
   * The variables.
   */
  variables?: { [key: string]: ConfigValueFilesConfigVariablesValue };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': ConfigValueFilesConfigVariablesValue },
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

