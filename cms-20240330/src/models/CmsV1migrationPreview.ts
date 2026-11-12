// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CmsV1MigrationCheck } from "./CmsV1migrationCheck";


export class CmsV1MigrationPreview extends $dara.Model {
  /**
   * @remarks
   * The itemized check results for name and resource support.
   */
  checks?: CmsV1MigrationCheck[];
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
   * Indicates whether the dry run is passed.
   * 
   * @example
   * false
   */
  migratable?: boolean;
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
   * The reason for the dry run failure.
   * 
   * @example
   * NAME_INVALID
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the source 1.0 group is persistently read-only.
   * 
   * @example
   * false
   */
  sourceReadOnly?: boolean;
  /**
   * @remarks
   * The type of the source application group. custom indicates a custom group, tag indicates a tag-based group, and regMgr indicates a resource group-based group.
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
      checks: 'checks',
      groupName: 'groupName',
      migratable: 'migratable',
      observeGroupId: 'observeGroupId',
      originGroupId: 'originGroupId',
      reason: 'reason',
      sourceReadOnly: 'sourceReadOnly',
      sourceType: 'sourceType',
      targetGroupName: 'targetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checks: { 'type': 'array', 'itemType': CmsV1MigrationCheck },
      groupName: 'string',
      migratable: 'boolean',
      observeGroupId: 'string',
      originGroupId: 'string',
      reason: 'string',
      sourceReadOnly: 'boolean',
      sourceType: 'string',
      targetGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checks)) {
      $dara.Model.validateArray(this.checks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

