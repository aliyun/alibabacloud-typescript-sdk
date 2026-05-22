// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attackType?: number;
  id?: number;
  instanceId?: string;
  language?: string;
  managedRulesetShrink?: string;
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
  queryArgsShrink?: string;
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
      managedRulesetShrink: 'ManagedRuleset',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protectionLevel: 'ProtectionLevel',
      queryArgsShrink: 'QueryArgs',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'number',
      id: 'number',
      instanceId: 'string',
      language: 'string',
      managedRulesetShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protectionLevel: 'number',
      queryArgsShrink: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

