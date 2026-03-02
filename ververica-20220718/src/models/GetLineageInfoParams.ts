// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLineageInfoParams extends $dara.Model {
  /**
   * @remarks
   * The depth of the data lineage.
   * 
   * @example
   * 1
   */
  depth?: number;
  /**
   * @remarks
   * The direction of the lineage. Valid values:
   * 
   * *   UPSTREAM: searches for upstream operators.
   * *   DOWNSTREAM: searches for downstream operators.
   * *   BOTH: searches for both upstream and downstream operators.
   * 
   * @example
   * Both
   */
  direction?: string;
  /**
   * @remarks
   * The job ID or the table ID. You can call the ListJobs operation to obtain the job ID or call the ListTables operation to obtain the table ID.
   * 
   * @example
   * 664cc64d-5dea-4ad3-9ee4-8432a874****
   */
  id?: string;
  /**
   * @remarks
   * The data type of the job or table. If the id parameter is set to the job ID, the value of this parameter is the data type of the job. If the id parameter is set to the table ID, the value of this parameter is the data type of the table.
   * 
   * @example
   * JOB
   */
  idType?: string;
  /**
   * @remarks
   * The lineage type. The value true indicates a field-level lineage. The value false indicates a table-level lineage.
   * 
   * @example
   * true
   */
  isColumnLevel?: boolean;
  /**
   * @remarks
   * Indicates whether the table was a temporary table.
   * 
   * @example
   * true
   */
  isTemporary?: boolean;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'depth',
      direction: 'direction',
      id: 'id',
      idType: 'idType',
      isColumnLevel: 'isColumnLevel',
      isTemporary: 'isTemporary',
      namespace: 'namespace',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      direction: 'string',
      id: 'string',
      idType: 'string',
      isColumnLevel: 'boolean',
      isTemporary: 'boolean',
      namespace: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

