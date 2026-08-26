// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrationStatusFilter extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter by migration rule. Valid values:
   * - true: Only migrated rules (migration_status is not 0 or NULL).
   * - false: Only native rules (migration_status = 0).
   */
  isMigrated?: boolean;
  static names(): { [key: string]: string } {
    return {
      isMigrated: 'isMigrated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMigrated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

