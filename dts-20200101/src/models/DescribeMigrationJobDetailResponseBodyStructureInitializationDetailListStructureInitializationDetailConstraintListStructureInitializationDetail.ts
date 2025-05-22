// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintListStructureInitializationDetail extends $dara.Model {
  /**
   * @remarks
   * The status of constraint creation. Valid values:
   * 
   * - **NotStarted**
   * - **Migrating**
   * - **Failed**
   * - **Finished**
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The constraints of the migration object, such as indexes and foreign keys. 
   * 
   * >  This parameter is returned only if the **ObjectType** parameter is set to **Table** and the migration object has constraints.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist；
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the database to which the migration object in the destination instance belongs.
   * 
   * @example
   * CREATE SEQUENCE "public"."collections_id_seq"   MINVALUE 1   MAXVALUE 9223372036854775807   START 249   INCREMENT BY 1 ;
   */
  objectDefinition?: string;
  /**
   * @remarks
   * The name of the database to which the migration object in the source instance belongs.
   * 
   * @example
   * customer
   */
  objectName?: string;
  /**
   * @remarks
   * The name of migration object.
   * 
   * @example
   * Table
   */
  objectType?: string;
  /**
   * @remarks
   * The error message returned if schema migration failed.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The type of the migration object. Valid values: **Table**, **Constraint**, **Index**, **View**, **Materialize View**, **Type**, **Synonym**, **Trigger**, **Function**, **Procedure**, **Package**, **Default**, **Rule**, **PlanGuide**, and **Sequence**.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
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

