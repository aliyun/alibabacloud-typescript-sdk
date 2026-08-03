// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowSubTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key.
   * 
   * Valid values:
   * 
   * - DataFlowIds: filters by data flow ID.
   * - DataFlowTaskIds: filters by data flow task ID.
   * - DataFlowSubTaskIds: filters by data flow streaming task ID.
   * - Status: filters by data flow status.
   * - SrcFilePath: filters by source file path.
   * - DstFilePath: filters by destination file path.
   * 
   * @example
   * DataFlowSubTaskIds
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key. Wildcards are not supported for this parameter.
   * 
   * - If Key is set to DataFlowIds, Value is set to a data flow ID or part of a data flow ID. You can specify one or more data flow IDs. A maximum of 10 data flow IDs can be specified. Example: `df-194433a5be31****` or `df-194433a512a2****,df-234533a5be31****`.
   * - If Key is set to DataFlowTaskIds, Value is set to a data flow task ID or part of a data flow task ID. You can specify one or more data flow task IDs. A maximum of 10 data flow task IDs can be specified. Example: `task-29ee8e890f45****` or `task-29ee8e890f45****,task-38ae8e890f45****`.
   * - If Key is set to DataFlowSubTaskIds, Value is set to a data flow streaming task ID or part of a data flow streaming task ID. You can specify one or more data flow streaming task IDs. A maximum of 10 data flow streaming task IDs can be specified. Example: `subTaskId-370kyfmyknxcyzw****` or `subTaskId-247kyfmyknxcyzw****,subTaskId-256kyfmyknxcyzw****`.
   * - If Key is set to Status, Value is set to the status of the data flow task, including EXPIRED, CREATED, RUNNING, COMPLETE, CANCELING, FAILED, and CANCELED. Combined queries are supported.
   * - If Key is set to SrcFilePath, Value is set to the source file path. The maximum length is 1023 characters.
   * - If Key is set to DstFilePath, Value is set to the destination file path. The maximum length is 1023 characters.
   * 
   * @example
   * subTaskId-370kyfmyknxcyzw****
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

export class DescribeDataFlowSubTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter keys for querying data flow streaming tasks.
   * 
   * **if can be null:**
   * false
   */
  filters?: DescribeDataFlowSubTasksRequestFilters[];
  /**
   * @remarks
   * The maximum number of results per query.
   * 
   * - Valid values: 20 to 100.
   * 
   * - Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * If the returned results are truncated, you can use NextToken to initiate a new request to retrieve the content after the current truncation point.
   * 
   * @example
   * iWk0AQAAAAAvY2FzZS8=
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
      filters: { 'type': 'array', 'itemType': DescribeDataFlowSubTasksRequestFilters },
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

