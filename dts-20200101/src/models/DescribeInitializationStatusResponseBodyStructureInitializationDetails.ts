// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints } from "./DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints";


export class DescribeInitializationStatusResponseBodyStructureInitializationDetails extends $dara.Model {
  /**
   * @remarks
   * The constraints of the synchronization object, such as indexes and foreign keys.
   * 
   * >  This parameter is returned only if the **ObjectType** parameter is set to **Table** and the synchronization object has constraints.
   */
  constraints?: DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints[];
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
   * The error message returned if initial schema synchronization failed.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: Table \\"customer\\" already exists
   */
  errorMessage?: string;
  /**
   * @remarks
   * The schema of the object.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` (\\n`customer_id`  int(10) unsigned   auto_increment  COMMENT \\"\\"   NOT NULL   , \\n`customer_title`  varchar(100)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`customer_company1216`  varchar(40)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`submission_date1216`  date     COMMENT \\"\\"   NULL   \\n, PRIMARY KEY (`customer_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
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
   * The type of the object. Valid values:
   * 
   * **Table**, **Constraint**, **Index**, **View**, **Materialize View**, **Type**, **Synonym**, **Trigger**, **Function**, **Procedure**, **Package**, **Default**, **Rule**, **PlanGuide**, and **Sequence**.
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
   * The status of initial schema synchronization. Valid values:
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
      constraints: 'Constraints',
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
      constraints: { 'type': 'array', 'itemType': DescribeInitializationStatusResponseBodyStructureInitializationDetailsConstraints },
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
    if(Array.isArray(this.constraints)) {
      $dara.Model.validateArray(this.constraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

