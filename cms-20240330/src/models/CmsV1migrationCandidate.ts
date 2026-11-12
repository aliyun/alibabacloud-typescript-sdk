// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CmsV1MigrationCandidate extends $dara.Model {
  /**
   * @remarks
   * The name of the source application group.
   * 
   * @example
   * order-service
   */
  groupName?: string;
  /**
   * @remarks
   * The current migration or takeover status of the source group. Valid values: NOT_MIGRATED: Not migrated. PROCESSING: In progress. MIGRATED: Migrated. If a historical task lacks proof of source read-only status, NEEDS_REVIEW is returned through rejectionReason.
   * 
   * @example
   * PROCESSING
   */
  migrationStatus?: string;
  /**
   * @remarks
   * The ID of the target observation group.
   * 
   * @example
   * og-0123456789abcdef
   */
  observeGroupId?: string;
  /**
   * @remarks
   * The ID of the source CloudMonitor 1.0 application group.
   * 
   * @example
   * 247675311
   */
  originGroupId?: string;
  /**
   * @remarks
   * The reason why the group cannot be selected.
   * 
   * @example
   * NEEDS_REVIEW
   */
  rejectionReason?: string;
  /**
   * @remarks
   * Specifies whether the group can be selected for migration.
   * 
   * @example
   * false
   */
  selectable?: boolean;
  /**
   * @remarks
   * Specifies whether the source 1.0 group is persistently read-only.
   * 
   * @example
   * false
   */
  sourceReadOnly?: boolean;
  /**
   * @remarks
   * The type of the source application group. Valid values: custom: Custom group. tag: Tag-based group. regMgr: Resource group-based group.
   * 
   * @example
   * custom
   */
  sourceType?: string;
  /**
   * @remarks
   * The name of the target observation group.
   * 
   * @example
   * order-service
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      migrationStatus: 'migrationStatus',
      observeGroupId: 'observeGroupId',
      originGroupId: 'originGroupId',
      rejectionReason: 'rejectionReason',
      selectable: 'selectable',
      sourceReadOnly: 'sourceReadOnly',
      sourceType: 'sourceType',
      targetGroupName: 'targetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      migrationStatus: 'string',
      observeGroupId: 'string',
      originGroupId: 'string',
      rejectionReason: 'string',
      selectable: 'boolean',
      sourceReadOnly: 'boolean',
      sourceType: 'string',
      targetGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

