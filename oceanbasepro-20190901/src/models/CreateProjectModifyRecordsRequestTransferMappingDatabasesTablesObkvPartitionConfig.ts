// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectModifyRecordsRequestTransferMappingDatabasesTablesObkvPartitionConfig extends $dara.Model {
  partitionSize?: number;
  partitionType?: string;
  virtualColumn?: string;
  static names(): { [key: string]: string } {
    return {
      partitionSize: 'PartitionSize',
      partitionType: 'PartitionType',
      virtualColumn: 'VirtualColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionSize: 'number',
      partitionType: 'string',
      virtualColumn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

