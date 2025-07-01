// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name. Valid values:
   * 
   * *   DataFlowIds: filters data flows by data flow ID.
   * *   FsetIds: filters data flows by fileset ID.
   * *   FileSystemPath: filters data flows based on the path of a fileset in a CPFS file system.
   * *   SourceStorage: filters data flows based on the access path of the source storage.
   * *   ThroughputList: filters data flows based on data flow throughput.
   * *   Description: filters data flows based on the fileset description.
   * *   Status: filters data flows based on data flow status.
   * 
   * @example
   * FsetIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to DataFlowIds, set Value to a data flow ID or a part of the data flow ID. You can specify a data flow ID or a group of data flow IDs. You can specify a maximum of 10 data flow IDs. Example: `df-194433a5be31****` or `df-194433a5be31****,df-184433a5be31****`.
   * *   If Key is set to FsetIds, set Value to a fileset ID or a part of the fileset ID. You can specify a fileset ID or a group of fileset IDs. You can specify a maximum of 10 fileset IDs. Example: `fset-1902718ea0ae****` or `fset-1902718ea0ae****,fset-1242718ea0ae****`.
   * *   If Key is set to FileSystemPath, set Value to the path or a part of the path of a fileset in a CPFS file system. The value of the parameter must be 1 to 1,024 characters in length.
   * *   If Key is set to SourceStorage, set Value to the access path or a part of the access path of the source storage. The path can be up to 1,024 characters in length.
   * *   If Key is set to ThroughputList, set Value to the data flow throughput. Combined query is supported.
   * *   If Key is set to Description, set Value to a data flow description or a part of the data flow description.
   * *   If Key is set to Status, set Value to the data flow status.
   * *   If Key is set to SourceStoragePath, set Value to the access path or a part of the access path of the source storage. The path can be up to 1,024 characters in length.
   * 
   * @example
   * FsetIds
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

