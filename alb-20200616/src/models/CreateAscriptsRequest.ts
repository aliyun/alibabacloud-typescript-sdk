// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAScriptsRequestAScriptsExtAttributes extends $dara.Model {
  /**
   * @remarks
   * The key of the extended attribute.
   * 
   * You can only set the key to **EsDebug**. This extended attribute adds a debug response header to record the execution of the AScript rule if the client request includes the _es_dbg parameter and its value matches the specified value of the extended attribute.
   * 
   * @example
   * EsDebug
   */
  attributeKey?: string;
  /**
   * @remarks
   * The value of the extended attribute, which can contain a maximum of 128 characters, including letters and digits.
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
   * The name of the AScript rule.
   * 
   * The length must be between 2 and 128 characters. This name must start with a letter and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  AScriptName?: string;
  /**
   * @remarks
   * Enables the AScript rule. Valid values:
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
   * Enables the extended attribute of the Ascript rule. Valid values:
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
   * The extended attribute of the AScript rule.
   */
  extAttributes?: CreateAScriptsRequestAScriptsExtAttributes[];
  /**
   * @remarks
   * The position where the Ascript rule is evaluated. Valid values are:
   * 
   * *   RequestHead (default): before inbound rules are evaluated
   * *   RequestFoot: after inbound rules are evaluated
   * *   ResponseHead: before outbound rules are evaluated
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

export class CreateAScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the AScript rules.
   */
  AScripts?: CreateAScriptsRequestAScripts[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
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

