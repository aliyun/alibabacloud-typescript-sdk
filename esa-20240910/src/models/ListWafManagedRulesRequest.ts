// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesRequestManagedRulesetManagedRules extends $dara.Model {
  action?: string;
  id?: number;
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
  action?: string;
  attackType?: number;
  managedRules?: ListWafManagedRulesRequestManagedRulesetManagedRules[];
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
  action?: string;
  /**
   * @example
   * example
   */
  idNameLike?: string;
  protectionLevels?: number[];
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
   * This parameter is required.
   */
  attackType?: number;
  id?: number;
  instanceId?: string;
  language?: string;
  managedRuleset?: ListWafManagedRulesRequestManagedRuleset;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  protectionLevel?: number;
  queryArgs?: ListWafManagedRulesRequestQueryArgs;
  /**
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

