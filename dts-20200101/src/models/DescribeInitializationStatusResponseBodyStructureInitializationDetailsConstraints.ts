// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the object in the destination instance belongs.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned if constraints failed to be created.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The syntax to create constraints.
   * 
   * @example
   * CREATE SEQUENCE "public"."collections_id_seq"   MINVALUE 1   MAXVALUE 9223372036854775807   START 249   INCREMENT BY 1 ;
   */
  objectDefinition?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * customer
   */
  objectName?: string;
  /**
   * @remarks
   * The type of the object. Valid value: **Table**.
   * 
   * @example
   * Table
   */
  objectType?: string;
  /**
   * @remarks
   * The name of the database to which the object in the source instance belongs.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of constraint creation. Valid values:
   * 
   * *   **NotStarted**
   * *   **Migrating**
   * *   **Failed**
   * *   **Finished**
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

