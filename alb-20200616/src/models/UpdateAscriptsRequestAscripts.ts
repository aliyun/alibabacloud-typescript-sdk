// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAScriptsRequestAScriptsExtAttributes } from "./UpdateAscriptsRequestAscriptsExtAttributes";


export class UpdateAScriptsRequestAScripts extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * as-mhqxcanmivn4g5****
   */
  AScriptId?: string;
  /**
   * @remarks
   * The name of the AScript rule.
   * 
   * The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * Group1
   */
  AScriptName?: string;
  /**
   * @remarks
   * Specifies whether to enable the AScript rule. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the extended attributes of the Ascript rule. Valid values:
   * 
   * *   true
   * *   false (false)
   * 
   * @example
   * true
   */
  extAttributeEnabled?: boolean;
  /**
   * @remarks
   * The extended attribute.
   */
  extAttributes?: UpdateAScriptsRequestAScriptsExtAttributes[];
  /**
   * @remarks
   * The content of the AScript rule.
   * 
   * @example
   * if and(match_re($uri, \\"^/1.txt$\\"), $arg_type) { rewrite(concat(\\"/1.\\", $arg_type), \\"break\\") }
   */
  scriptContent?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptId: 'AScriptId',
      AScriptName: 'AScriptName',
      enabled: 'Enabled',
      extAttributeEnabled: 'ExtAttributeEnabled',
      extAttributes: 'ExtAttributes',
      scriptContent: 'ScriptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptId: 'string',
      AScriptName: 'string',
      enabled: 'boolean',
      extAttributeEnabled: 'boolean',
      extAttributes: { 'type': 'array', 'itemType': UpdateAScriptsRequestAScriptsExtAttributes },
      scriptContent: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extAttributes)) {
      $dara.Model.validateArray(this.extAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

