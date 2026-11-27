// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key.
   * 
   * Valid values:
   * 
   * - DataFlowIds: Filters by data flow ID.
   * - TaskIds: Filters by data flow task ID.
   * - Originator: Filters by the originator of the data flow task.
   * - TaskActions: Filters by the type of the data flow task.
   * - DataTypes: Filters by the data type of the data flow task.
   * - Status: Filters by the data flow status.
   * - CreateTimeBegin: Filters data flow tasks created after a specified time.
   * - CreateTimeEnd: Filters data flow tasks created before a specified time.
   * - StartTimeBegin: Filters data flow tasks started after a specified time.
   * - StartTimeEnd: Filters data flow tasks started before a specified time.
   * - EndTimeBegin: Filters data flow tasks ended after a specified time.
   * - EndTimeEnd: Filters data flow tasks ended before a specified time.
   * 
   * @example
   * DataFlowIds
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key. This parameter does not support wildcards.
   * 
   * - When Key is set to DataFlowIds, Value is set to the data flow ID or a part of the data flow ID. It can be a single DataFlowId or a list of DataFlowIds. You can specify up to 10 data flow IDs. Example: `df-194433a5be31****` or `df-194433a512a2****,df-234533a5be31****`.
   * - When Key is set to TaskIds, Value is set to the data flow task ID or a part of the data flow task ID. It can be a single task ID or a list of task IDs. You can specify up to 10 data flow task IDs. Example: `task-38aa8e890f45****` or `task-38aa8e890f45****,task-29ae8e890f45****`.
   * - When Key is set to TaskActions, Value is set to the task type of the data flow. Valid values: **Import**, **Export**, **Evict**, **Inventory**, **StreamImport**, and **StreamExport**. Combined queries are supported. Currently, CPFS for Lingjun only supports Import, Export, StreamImport, and StreamExport. StreamImport and StreamExport are supported only in CPFS for Lingjun 2.6.0 and later.
   * - When Key is set to DataTypes, Value is set to the data type of the data flow task. Valid values: MetaAndData, Metadata, and Data. Combined queries are supported.
   * - When Key is set to Originator, Value is set to the originator of the data flow task. Valid values: User and System.
   * - When Key is set to Status, Value is set to the status of the data flow task. Valid values: Pending, Executing, Failed, Completed, Canceling, and Canceled. Combined queries are supported.
   * - When Key is set to CreateTimeBegin, Value is set to the minimum creation time of the data flow task. Format: `yyyy-MM-ddThh:mmZ`.
   * - When Key is set to CreateTimeEnd, Value is set to the maximum creation time of the data flow task. Format: `yyyy-MM-ddThh:mmZ`.
   * - When Key is set to StartTimeBegin, Value is set to the minimum start time of the data flow task. Format: `yyyy-MM-ddThh:mmZ`.
   * - When Key is set to StartTimeEnd, Value is set to the maximum start time of the data flow task. Format: `yyyy-MM-ddThh:mmZ`.
   * - When Key is set to EndTimeBegin, Value is set to the minimum end time of the data flow task. Format: `yyyy-MM-ddThh:mmZ`.
   * - When Key is set to EndTimeEnd, Value is set to the maximum end time of the data flow task. Format: `yyyy-MM-ddThh:mmZ`.
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
   * - General-purpose CPFS: must start with `cpfs-`, for example, cpfs-099394bd928c****.
   * 
   * - CPFS for Lingjun: must start with `bmcpfs-`, for example, bmcpfs-290w65p03ok64ya****.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The collection of filter keys.
   * 
   * **if can be null:**
   * false
   */
  filters?: DescribeDataFlowTasksRequestFilters[];
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
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
   * The next token. If the returned results of a request are truncated, you can use NextToken to initiate another request and obtain the remaining results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to query report information.
   * 
   * Valid values:
   * - True: Queries reports. This is the default value.
   * - False: Does not query reports.
   * 
   * > - Setting this parameter to false can accelerate the query speed.
   * > - Only CPFS for Lingjun supports this parameter.
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

