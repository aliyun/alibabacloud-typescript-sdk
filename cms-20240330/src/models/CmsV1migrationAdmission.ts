// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CmsV1MigrationAdmission extends $dara.Model {
  /**
   * @remarks
   * The real-time new migration eligibility evaluated for the current target primary account, which does not replace RAM, account ownership, or workspace validations.
   * 
   * @example
   * false
   */
  newMigrationAllowed?: boolean;
  /**
   * @remarks
   * The summary of the normalized policy, which excludes the UID list and is not an authorization credential.
   * 
   * @example
   * 03ac8b5b92cb9c2675119d64c31d2520c069647aa9b88979df1bb115472c02b4
   */
  policyRevision?: string;
  /**
   * @remarks
   * The reason why the new migration is denied. CMSV1_MIGRATION_NOT_ADMITTED indicates that the migration is not admitted, and CMSV1_MIGRATION_POLICY_UNAVAILABLE indicates that the policy is unavailable. Historical tasks remain queryable.
   * 
   * @example
   * CMSV1_MIGRATION_NOT_ADMITTED
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      newMigrationAllowed: 'newMigrationAllowed',
      policyRevision: 'policyRevision',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newMigrationAllowed: 'boolean',
      policyRevision: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

