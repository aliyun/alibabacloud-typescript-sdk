// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilesConfigVariablesValue } from "./FilesConfigVariablesValue";


export class PublishAdvanceConfigRequestFilesConfig extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * {\\"url\\":\\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\\"}
   */
  content?: string;
  /**
   * @remarks
   * The variables.
   */
  variables?: { [key: string]: FilesConfigVariablesValue };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': FilesConfigVariablesValue },
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

