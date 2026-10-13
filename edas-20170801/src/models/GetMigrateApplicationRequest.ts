// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The migration ID.
   * 
   * @example
   * afe9995d-31fd-40ff-a669-c125d76d8267
   */
  migrationId?: string;
  /**
   * @remarks
   * The operation type of the migration task. Valid values: 1: import. 2: export. 3: clone. If this parameter is not specified, all types are returned.
   * 
   * @example
   * 1
   */
  migrationType?: number;
  /**
   * @remarks
   * regionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      migrationId: 'migrationId',
      migrationType: 'migrationType',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationId: 'string',
      migrationType: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

