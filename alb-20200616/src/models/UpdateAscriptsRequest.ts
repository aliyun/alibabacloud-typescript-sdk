// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAScriptsRequestAScriptsExtAttributes extends $dara.Model {
  /**
   * @remarks
   * The attribute name.
   * 
   * Set the value to **EsDebug**, which specifies that when requests carry the _es_dbg parameter whose value is the specified key, the debugging header is enabled to output the execution result.
   * 
   * This parameter is required.
   * 
   * @example
   * EsDebug
   */
  attributeKey?: string;
  /**
   * @remarks
   * The attribute value, which must be 1 to 128 characters in length, and can contain letters and digits.
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

export class UpdateAScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the AScript rule.
   */
  AScripts?: UpdateAScriptsRequestAScripts[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * b1f642ac-5558-4a36-b7d9-cf53f40ea5c8
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
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

