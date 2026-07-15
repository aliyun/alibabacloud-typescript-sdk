// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesRequestManagedRulesetManagedRules extends $dara.Model {
  /**
   * @remarks
   * The action for a single rule. This parameter takes effect only in custom mode (ProtectionLevel = -1).
   * 
   * Common valid values: monitor, deny, js, captcha. The actual available values depend on the instance quota.
   * 
   * @example
   * js
   */
  action?: string;
  /**
   * @remarks
   * The unique ID of a single managed rule.
   * 
   * @example
   * 20611349
   */
  id?: number;
  /**
   * @remarks
   * The rule enabled status.
   * 
   * Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesRequestManagedRuleset extends $dara.Model {
  /**
   * @remarks
   * The unified action when ProtectionLevel is greater than 0. This parameter cannot be empty in this case.
   * 
   * Common valid values: monitor, deny, js, captcha. The actual available values depend on the instance quota.
   * 
   * @example
   * monitor
   */
  action?: string;
  /**
   * @remarks
   * The attack type encoding. The value cannot be 0.
   * 
   * Example values: 11 (SQL injection), 12 (XSS), 13 (code execute), 14 (CRLF), 15 (local file inclusion (LFI)), 16 (remote file inclusion (RFI)), 17 (WebShell), 22 (command injection), 26 (SSRF), 27 (path traversal), 28 (protocol violation), 31 (scanner behavior).
   * 
   * @example
   * 11
   */
  attackType?: number;
  /**
   * @remarks
   * The rule configuration list in custom mode. This parameter is used only when ProtectionLevel is set to -1.
   * 
   * Each element contains Id, Status, and Action, which are used to specify the enabled status and action for each managed rule.
   */
  managedRules?: ListWafManagedRulesRequestManagedRulesetManagedRules[];
  /**
   * @remarks
   * The protection level within the ruleset.
   * 
   * Valid values: -1 (custom mode, specify each rule through ManagedRules), 1 (loose), 2 (medium), 3 (strict), 4 (super strict).
   * 
   * When the value is -1, ManagedRules cannot be empty. When the value is greater than 0, Action cannot be empty.
   * 
   * @example
   * -1
   */
  protectionLevel?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      attackType: 'AttackType',
      managedRules: 'ManagedRules',
      protectionLevel: 'ProtectionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      attackType: 'number',
      managedRules: { 'type': 'array', 'itemType': ListWafManagedRulesRequestManagedRulesetManagedRules },
      protectionLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.managedRules)) {
      $dara.Model.validateArray(this.managedRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * The action.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * Fuzzy match by rule ID or rule name.
   * 
   * @example
   * example
   */
  idNameLike?: string;
  /**
   * @remarks
   * The list of rule protection levels.
   */
  protectionLevels?: number[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      idNameLike: 'IdNameLike',
      protectionLevels: 'ProtectionLevels',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      idNameLike: 'string',
      protectionLevels: { 'type': 'array', 'itemType': 'number' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protectionLevels)) {
      $dara.Model.validateArray(this.protectionLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafManagedRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The attack type of the vulnerability prevention event. Valid values:
   * - SQL injection
   * - cross-site scripting (XSS)
   * - code execute
   * - CRLF
   * - local file inclusion (LFI)
   * - remote file inclusion (RFI)
   * - webshell
   * - cross-site request forgery
   * - Others
   * - SEMA
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  attackType?: number;
  /**
   * @remarks
   * The ID of the WAF rule.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The WAF instance ID.
   * 
   * @example
   * esa-site-awmmx25y2igw
   */
  instanceId?: string;
  /**
   * @remarks
   * The language type. The response is returned in the specified language. Valid values:
   * 
   * - **en**: English.
   * - **zh**: Chinese.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The managed ruleset configuration in JSON string format.
   * 
   * Contains the AttackType, ProtectionLevel, Action, and ManagedRules subfields. When ProtectionLevel is set to -1 (custom mode), specify the status and action for each rule through the ManagedRules array.
   */
  managedRuleset?: ListWafManagedRulesRequestManagedRuleset;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The currently saved protection level, which represents the existing configuration state in the database.
   * 
   * Valid values: -1 (custom mode), 1 (loose), 2 (medium), 3 (strict), 4 (super strict).
   * 
   * Difference from ManagedRuleset.ProtectionLevel: this parameter indicates the currently effective configuration, while ManagedRuleset.ProtectionLevel indicates the target value being passed in.
   * 
   * @example
   * 1
   */
  protectionLevel?: number;
  /**
   * @remarks
   * The query conditions.
   * 
   * @example
   * {\\"Status\\":\\"\\",\\"ProtectionLevels\\":[2,1],\\"Action\\":\\"\\",\\"IdNameLike\\":\\"\\"}
   */
  queryArgs?: ListWafManagedRulesRequestQueryArgs;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      id: 'Id',
      instanceId: 'InstanceId',
      language: 'Language',
      managedRuleset: 'ManagedRuleset',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protectionLevel: 'ProtectionLevel',
      queryArgs: 'QueryArgs',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'number',
      id: 'number',
      instanceId: 'string',
      language: 'string',
      managedRuleset: ListWafManagedRulesRequestManagedRuleset,
      pageNumber: 'number',
      pageSize: 'number',
      protectionLevel: 'number',
      queryArgs: ListWafManagedRulesRequestQueryArgs,
      siteId: 'number',
    };
  }

  validate() {
    if(this.managedRuleset && typeof (this.managedRuleset as any).validate === 'function') {
      (this.managedRuleset as any).validate();
    }
    if(this.queryArgs && typeof (this.queryArgs as any).validate === 'function') {
      (this.queryArgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

