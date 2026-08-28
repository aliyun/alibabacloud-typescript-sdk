// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of subject (consumer) IDs to bind.
   * 
   * @example
   * cs-001,cs-002
   */
  addIds?: string[];
  /**
   * @remarks
   * The conflict snapshot hash used to prevent concurrent dirty overwrites during confirmation. Obtain this value from the response of a prior dryRun=true call.
   * 
   * This parameter is not required in the following cases: no conflict exists, the request is a dry run (dryRun=true), or overwrite is set to false.
   * 
   * When dryRun=false and overwrite=true, if this parameter is missing or the value has expired and no longer matches, the backend returns accepted=false with a new conflict preview. You must perform a dry run again to confirm the new conflict.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541f50xxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The list of consumer group IDs. This parameter is not supported currently.
   * 
   * @example
   * group1,group2
   * 
   * @deprecated
   */
  consumerGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to perform a dry run only without persisting or applying the configuration. A dry run checks whether conflicting rules exist on the bound consumers. The same consumer cannot have two quota rules with the same calendar period. For example, a consumer that already has a daily calendar quota cannot be assigned another daily calendar quota rule.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting on conflict. If overwriting is allowed, conflicting subjects (consumers) are unbound from the old rule and bound to the new rule.
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The updated total available quota.
   * 
   * @example
   * 1000
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The list of subject (consumer) IDs to unbind.
   * 
   * @example
   * cs003,cs-004
   */
  removeIds?: string[];
  /**
   * @remarks
   * The updated rule name.
   * 
   * @example
   * team-rule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      addIds: 'addIds',
      conflictHash: 'conflictHash',
      consumerGroupIds: 'consumerGroupIds',
      dryRun: 'dryRun',
      overwrite: 'overwrite',
      quotaLimit: 'quotaLimit',
      removeIds: 'removeIds',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addIds: { 'type': 'array', 'itemType': 'string' },
      conflictHash: 'string',
      consumerGroupIds: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
      overwrite: 'boolean',
      quotaLimit: 'number',
      removeIds: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addIds)) {
      $dara.Model.validateArray(this.addIds);
    }
    if(Array.isArray(this.consumerGroupIds)) {
      $dara.Model.validateArray(this.consumerGroupIds);
    }
    if(Array.isArray(this.removeIds)) {
      $dara.Model.validateArray(this.removeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

