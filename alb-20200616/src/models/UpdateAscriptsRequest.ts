// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAScriptsRequestAScriptsExtAttributes extends $dara.Model {
  /**
   * @remarks
   * The attribute name of the AScript script.
   * 
   * The only valid value is **EsDebug**: when a request carries the _es_dbg parameter and the value matches the key configured here, the corresponding debug response headers are enabled to output rule execution records.
   * 
   * This parameter is required.
   * 
   * @example
   * EsDebug
   */
  attributeKey?: string;
  /**
   * @remarks
   * The attribute value. The value can contain uppercase and lowercase letters or digits and must be 1 to 128 characters in length.
   * 
   * This parameter is required.
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

export class UpdateAScriptsRequestAScripts extends $dara.Model {
  /**
   * @remarks
   * The ID of the programmable script.
   * 
   * This parameter is required.
   * 
   * @example
   * as-mhqxcanmivn4g5****
   */
  AScriptId?: string;
  /**
   * @remarks
   * The name of the programmable script.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. The name must start with a letter, a Chinese character, or a digit.
   * 
   * @example
   * Group1
   */
  AScriptName?: string;
  /**
   * @remarks
   * Specifies whether to enable the programmable script. Valid values:
   * 
   * - **true**: enables the programmable script.
   * 
   * - **false** (default): does not enable the programmable script.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable extended attributes for the programmable script. Valid values:
   * 
   * - true: enables extended attributes.
   * 
   * - false (default): does not enable extended attributes.
   * 
   * @example
   * true
   */
  extAttributeEnabled?: boolean;
  /**
   * @remarks
   * The extended attributes.
   */
  extAttributes?: UpdateAScriptsRequestAScriptsExtAttributes[];
  /**
   * @remarks
   * The content of the programmable script.
   * 
   * @example
   * if and(match_re($uri, \"^/1.txt$\"), $arg_type) { rewrite(concat(\"/1.\", $arg_type), \"break\") }
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

export class UpdateAScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of programmable scripts.
   */
  AScripts?: UpdateAScriptsRequestAScripts[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value of each API request is different.
   * 
   * @example
   * b1f642ac-5558-4a36-b7d9-cf53******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      AScripts: 'AScripts',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScripts: { 'type': 'array', 'itemType': UpdateAScriptsRequestAScripts },
      clientToken: 'string',
      dryRun: 'boolean',
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

