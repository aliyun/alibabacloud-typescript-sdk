// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of consumer subject IDs to bind.
   * 
   * @example
   * cs-001,cs-002
   */
  addIds?: string[];
  /**
   * @remarks
   * The conflict snapshot hash, used to prevent concurrent dirty overwrites when confirming an overwrite. Obtain this value from the response of a dry run request with dryRun set to true.
   * 
   * This parameter is not required in the following cases: no conflicts exist, the request is a dry run (dryRun=true), or overwrite is set to false.
   * 
   * If dryRun is set to false and overwrite is set to true but this parameter is missing or the value has expired, the backend returns accepted=false with a new conflict preview. Perform a new dry run to confirm the updated conflicts.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541f50xxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * **[Deprecated]** The list of consumer group IDs.
   * 
   * @example
   * group1,group2
   * 
   * @deprecated
   */
  consumerGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run without applying the actual configuration. A dry run checks whether conflicting rules exist on the bound API consumer. The same API consumer cannot have two natural period quotas with the same period. For example, you cannot add a calendar day quota rule to an API consumer that already has a calendar day quota rule.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting when conflicts exist. If overwriting is allowed, conflicting subjects (consumers or consumer groups) are unbound from the old rule and bound to the new rule.
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The updated total available quota per period.
   * 
   * @example
   * 1000
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The list of consumer subject IDs to unbind.
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

