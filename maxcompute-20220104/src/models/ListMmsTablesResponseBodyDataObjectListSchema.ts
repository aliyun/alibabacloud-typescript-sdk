// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsTablesResponseBodyDataObjectListSchemaColumns } from "./ListMmsTablesResponseBodyDataObjectListSchemaColumns";
import { ListMmsTablesResponseBodyDataObjectListSchemaPartitions } from "./ListMmsTablesResponseBodyDataObjectListSchemaPartitions";


export class ListMmsTablesResponseBodyDataObjectListSchema extends $dara.Model {
  columns?: ListMmsTablesResponseBodyDataObjectListSchemaColumns[];
  /**
   * @example
   * for mms test
   */
  comment?: string;
  /**
   * @example
   * test
   */
  name?: string;
  partitions?: ListMmsTablesResponseBodyDataObjectListSchemaPartitions[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      comment: 'comment',
      name: 'name',
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectListSchemaColumns },
      comment: 'string',
      name: 'string',
      partitions: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectListSchemaPartitions },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

