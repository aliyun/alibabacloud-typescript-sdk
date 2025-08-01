// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectModifyRecordsRequestTransferMappingSchemasViewsAdbTableSchema extends $dara.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.distributedKeys)) {
      $dara.Model.validateArray(this.distributedKeys);
    }
    if(Array.isArray(this.primaryKeys)) {
      $dara.Model.validateArray(this.primaryKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

