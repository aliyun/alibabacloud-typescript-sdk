// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of subject (consumer) IDs to associate.
   * 
   * @example
   * cs-001,cs-002
   */
  addIds?: string[];
  /**
   * @remarks
   * The conflict snapshot hash, which is used to prevent concurrent dirty overwrites when you confirm an overwrite. You can obtain this value by first executing a request with dryRun=true and extracting it from the response.
   * 
   * You do not need to specify this parameter in the following scenarios: no conflicts exist; the request is a dry run with dryRun=true; or overwrite=false, which means overwriting is not confirmed.
   * 
   * If dryRun=false and overwrite=true, but this parameter is not provided or has expired and does not match, the backend returns accepted=false along with a new conflict preview. In this case, you must perform a dry run again to confirm the new conflicts.
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
   * Specifies whether to perform a dry run only without saving the configuration to the database or delivering the actual configuration. This parameter is used to check whether conflicting rules exist on the associated consumers. A single consumer cannot be configured with two natural period quotas of the same period. For example, a consumer that already has a natural daily quota cannot be assigned another natural daily quota rule.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting when conflicts occur. Note that if overwriting is allowed, the conflicting subjects (consumers or consumer groups) will be disassociated from the old rule and associated with the new rule.
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
   * The list of subject (consumer) IDs to disassociate.
   * 
   * @example
   * cs003,cs-004
   */
  removeIds?: string[];
  /**
   * @remarks
   * The updated name of the rule.
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

