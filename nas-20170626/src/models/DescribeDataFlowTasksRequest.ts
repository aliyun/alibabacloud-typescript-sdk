// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key.
   * 
   * Valid values:
   * 
   * - DataFlowIds: filters by data flow ID.
   * - TaskIds: filters by data flow task ID.
   * - Originator: filters by the initiator of the data flow task.
   * - TaskActions: filters by the type of the data flow task.
   * - DataTypes: filters by the data type of the data flow task.
   * - Status: filters by data flow status.
   * - CreateTimeBegin: filters data flow tasks created after the specified time.
   * - CreateTimeEnd: filters data flow tasks created before the specified time.
   * - StartTimeBegin: filters data flow tasks started after the specified time.
   * - StartTimeEnd: filters data flow tasks started before the specified time.
   * - EndTimeBegin: filters data flow tasks ended after the specified time.
   * - EndTimeEnd: filters data flow tasks ended before the specified time.
   * 
   * @example
   * DataFlowIds
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key. Wildcards are not supported.
   * 
   * - If Key is set to DataFlowIds, Value is set to a data flow ID or part of a data flow ID. You can specify one or more data flow IDs. A maximum of 10 data flow IDs can be specified. Example: `df-194433a5be31****` or `df-194433a512a2****,df-234533a5be31****`.
   * - If Key is set to TaskId, Value is set to a data flow task ID or part of a data flow task ID. You can specify one or more data flow task IDs. A maximum of 10 data flow task IDs can be specified. Example: `task-38aa8e890f45****` or `task-38aa8e890f45****,task-29ae8e890f45****`.
   * - If Key is set to TaskActions, Value is set to the type of the data flow task, including **Import**, **Export**, **Evict**, **Inventory**, **StreamImport**, and **StreamExport**. Combined queries are supported. CPFS for Lingjun supports only Import, Export, StreamImport, and StreamExport. StreamImport and StreamExport are supported only by CPFS for Lingjun 2.6.0 and later.
   * - If Key is set to DataTypes, Value is set to the data type of the data flow task, including MetaAndData, Metadata, and Data. Combined queries are supported.
   * - If Key is set to Originator, Value is set to the initiator of the data flow task, including User and System.
   * - If Key is set to Status, Value is set to the status of the data flow task, including Pending, Executing, Failed, Completed, Canceling, and Canceled. Combined queries are supported.
   * - If Key is set to CreateTimeBegin, Value is set to the earliest creation time of data flow tasks. Format: `yyyy-MM-ddThh:mmZ`.
   * - If Key is set to CreateTimeEnd, Value is set to the latest creation time of data flow tasks. Format: `yyyy-MM-ddThh:mmZ`.
   * - If Key is set to StartTimeBegin, Value is set to the earliest start time of data flow tasks. Format: `yyyy-MM-ddThh:mmZ`.
   * - If Key is set to StartTimeEnd, Value is set to the latest start time of data flow tasks. Format: `yyyy-MM-ddThh:mmZ`.
   * - If Key is set to EndTimeBegin, Value is set to the earliest end time of data flow tasks. Format: `yyyy-MM-ddThh:mmZ`.
   * - If Key is set to EndTimeEnd, Value is set to the latest end time of data flow tasks. Format: `yyyy-MM-ddThh:mmZ`.
   * 
   * @example
   * df-194433a5be31****
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

export class DescribeDataFlowTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * - General-purpose CPFS: must start with `cpfs-`, such as cpfs-099394bd928c****.
   * 
   * - CPFS for Lingjun: must start with `bmcpfs-`, such as bmcpfs-290w65p03ok64ya****.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter conditions.
   * 
   * **if can be null:**
   * false
   */
  filters?: DescribeDataFlowTasksRequestFilters[];
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the return results are truncated, you can use NextToken to initiate a new request to retrieve the content after the truncation point.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to query report information.
   * 
   * - True (default): queries reports.
   * - False: does not query reports.
   * 
   * >- Setting this parameter to False can speed up queries.
   * > - Only CPFS for Lingjun is supported.
   * 
   * @example
   * True
   */
  withReports?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      withReports: 'WithReports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeDataFlowTasksRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      withReports: 'boolean',
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

