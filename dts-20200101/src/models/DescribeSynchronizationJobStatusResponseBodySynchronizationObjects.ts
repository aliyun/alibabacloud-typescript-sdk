// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes } from "./DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes";
import { DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes } from "./DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes";


export class DescribeSynchronizationJobStatusResponseBodySynchronizationObjects extends $dara.Model {
  /**
   * @remarks
   * The database name that is used in the destination instance.
   * 
   * @example
   * newdtstestdatabase
   */
  newSchemaName?: string;
  /**
   * @remarks
   * The name of the synchronized database.
   * 
   * @example
   * dtstestdatabase
   */
  schemaName?: string;
  /**
   * @remarks
   * The source tables that are excluded from the data synchronization task.
   */
  tableExcludes?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes[];
  /**
   * @remarks
   * The tables that are synchronized by the task.
   */
  tableIncludes?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes[];
  static names(): { [key: string]: string } {
    return {
      newSchemaName: 'NewSchemaName',
      schemaName: 'SchemaName',
      tableExcludes: 'TableExcludes',
      tableIncludes: 'TableIncludes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newSchemaName: 'string',
      schemaName: 'string',
      tableExcludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes },
      tableIncludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes },
    };
  }

  validate() {
    if(Array.isArray(this.tableExcludes)) {
      $dara.Model.validateArray(this.tableExcludes);
    }
    if(Array.isArray(this.tableIncludes)) {
      $dara.Model.validateArray(this.tableIncludes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

