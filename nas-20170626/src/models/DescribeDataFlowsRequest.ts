// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key. Valid values:
   * 
   * - DataFlowIds: filters data flows by data flow ID.
   * - FsetIds: filters data flows by Fileset ID.
   * - FileSystemPath: filters data flows by the path of the Fileset in the CPFS file system.
   * - SourceStorage: filters data flows by the access path of the source storage.
   * - ThroughputList: filters data flows by the transmission bandwidth.
   * - Description: filters data flows by the description of the Fileset.
   * - Status: filters data flows by the data flow status.
   * 
   * @example
   * FsetIds
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key. This parameter does not support wildcards.
   * 
   * - If Key is set to DataFlowIds, Value is set to a data flow ID or a part of a data flow ID. You can specify one or more data flow IDs. A maximum of 10 data flow IDs can be specified. Example: `df-194433a5be31****` or `df-194433a512a2****,df-234533a5be31****`.
   * 
   * - If Key is set to FsetIds, Value is set to a Fileset ID or a part of a Fileset ID. You can specify one or more Fileset IDs. A maximum of 10 Fileset IDs can be specified. Example: `fset-1902718ea0ae****` or `fset-235718ea0ae****,fset-5122718ea0ae****`.
   * - If Key is set to FileSystemPath, Value is set to a path or a part of a path in the CPFS file system. The value must be 1 to 1,024 characters in length.
   * - If Key is set to SourceStorage, Value is set to the access path of the source storage. The value can be up to 1,024 characters in length.
   * - If Key is set to ThroughputList, Value is set to the transmission bandwidth of the data flow. Combined queries are supported.
   * - If Key is set to Description, Value is set to the description of the data flow or a part of the description.
   * - If Key is set to Status, Value is set to the data flow status.
   * - If Key is set to SourceStoragePath, Value is set to the access path of the source storage or a part of the access path. The value can be up to 1,024 characters in length.
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

export class DescribeDataFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-125487\*\*\*\*.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-0015\*\*\*\*.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter keys used to query data flows.
   * 
   * **if can be null:**
   * true
   */
  filters?: DescribeDataFlowsRequestFilters[];
  /**
   * @remarks
   * The maximum number of results to return per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If the returned results are truncated, you can use NextToken to initiate another request to retrieve the remaining results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeDataFlowsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

