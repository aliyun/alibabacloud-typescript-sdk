// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAScriptsRequestAScriptsExtAttributes extends $dara.Model {
  /**
   * @remarks
   * The attribute key of the AScript script.
   * 
   * Valid values: **EsDebug** only. When a request carries the _es_dbg parameter and its value matches the key configured here, the corresponding debug response headers are enabled to output rule execution records.
   * 
   * @example
   * EsDebug
   */
  attributeKey?: string;
  /**
   * @remarks
   * The attribute value. The value can contain uppercase and lowercase letters and digits, and must be 1 to 128 characters in length.
   * 
   * @example
   * test123
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeKey: 'AttributeKey',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeKey: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAScriptsRequestAScripts extends $dara.Model {
  /**
   * @remarks
   * The name of the programmable script.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. It must start with a letter, Chinese character, or digit.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  AScriptName?: string;
  /**
   * @remarks
   * Specifies whether to enable the programmable script. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false** (default): Disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the extended attributes of the programmable script. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false (default): Disabled.
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
   * The execution position of the programmable script. Valid values:
   * 
   * - RequestHead (default): before request-direction rules are executed.
   * 
   * - RequestFoot: after request-direction rules are executed.
   * 
   * - ResponseHead: before response-direction rules are executed.
   * 
   * @example
   * RequestFoot
   */
  position?: string;
  /**
   * @remarks
   * The content of the programmable script.
   * 
   * This parameter is required.
   * 
   * @example
   * if and(match_re($uri, \"^/1.txt$\"), $arg_type) {   rewrite(concat(\"/1.\", $arg_type), \"break\") }
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

export class CreateAScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of programmable script information.
   */
  AScripts?: CreateAScriptsRequestAScripts[];
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * Generate a unique value from your client for each request. ClientToken supports only ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: Sends a dry run request. No programmable script is created. The system checks whether the required parameters are specified, the request format is valid, and business limits are met. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
   * - **false** (default): Sends a regular request. If the check passes, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-6hfq3zs0x04ibn****
   */
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      AScripts: 'AScripts',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScripts: { 'type': 'array', 'itemType': CreateAScriptsRequestAScripts },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AScripts)) {
      $dara.Model.validateArray(this.AScripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

