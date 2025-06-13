// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAScriptsRequestAScriptsExtAttributes } from "./CreateAscriptsRequestAscriptsExtAttributes";


export class CreateAScriptsRequestAScripts extends $dara.Model {
  /**
   * @remarks
   * The name of the AScript rule.
   * 
   * The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * test
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
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the extended attributes of the AScript rule. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  extAttributeEnabled?: boolean;
  /**
   * @remarks
   * The extended attributes.
   */
  extAttributes?: CreateAScriptsRequestAScriptsExtAttributes[];
  /**
   * @remarks
   * 可编程脚本执行位置
   * 
   * - RequestHead（默认值）：请求方向规则执行前
   * 
   * - RequestFoot：请求方向规则执行后
   * 
   * - ResponseHead：响应方向规则执行前
   * 
   * @example
   * RequestFoot
   */
  position?: string;
  /**
   * @remarks
   * The content of the AScript rule.
   * 
   * This parameter is required.
   * 
   * @example
   * if and(match_re($uri, \\"^/1.txt$\\"), $arg_type) {   rewrite(concat(\\"/1.\\", $arg_type), \\"break\\") }
   */
  scriptContent?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptName: 'AScriptName',
      enabled: 'Enabled',
      extAttributeEnabled: 'ExtAttributeEnabled',
      extAttributes: 'ExtAttributes',
      position: 'Position',
      scriptContent: 'ScriptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptName: 'string',
      enabled: 'boolean',
      extAttributeEnabled: 'boolean',
      extAttributes: { 'type': 'array', 'itemType': CreateAScriptsRequestAScriptsExtAttributes },
      position: 'string',
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

