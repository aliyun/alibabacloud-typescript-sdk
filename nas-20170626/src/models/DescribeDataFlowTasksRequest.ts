// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter key.
   * 
   * Valid values:
   * 
   * - DataFlowIds: Filters by data flow ID.
   * 
   * - TaskIds: Filters by data flow task ID.
   * 
   * - Originator: Filters by originator.
   * 
   * - TaskActions: Filters by data flow task type.
   * 
   * - DataTypes: Filters by data type.
   * 
   * - Status: Filters by status.
   * 
   * - CreateTimeBegin: Filters data flow tasks created after the specified time.
   * 
   * - CreateTimeEnd: Filters data flow tasks created before the specified time.
   * 
   * - StartTimeBegin: Filters data flow tasks that started after the specified time.
   * 
   * - StartTimeEnd: Filters data flow tasks that started before the specified time.
   * 
   * - EndTimeBegin: Filters data flow tasks that ended after the specified time.
   * 
   * - EndTimeEnd: Filters data flow tasks that ended before the specified time.
   * 
   * @example
   * DataFlowIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * - When `Key` is `DataFlowIds`, specify one or more data flow IDs. You can specify up to 10 data flow IDs, separated by commas. For example, `df-194433a5be31****` or `df-194433a512a2****,df-234533a5be31****`.
   * 
   * - When `Key` is `TaskId`, specify one or more data flow task IDs. You can specify up to 10 data flow task IDs, separated by commas. For example, `task-38aa8e890f45****` or `task-38aa8e890f45****,task-29ae8e890f45****`.
   * 
   * - When `Key` is `TaskActions`, specify the data flow task type. Valid values are **Import**, **Export**, **Evict**, **Inventory**, **StreamImport**, and **StreamExport**. You can specify multiple values. CPFS for AI Computing supports only Import, Export, StreamImport, and StreamExport. StreamImport and StreamExport are available only in CPFS for AI Computing 2.6.0 and later.
   * 
   * - When `Key` is `DataTypes`, specify the data type of the data flow task. Valid values are MetaAndData, Metadata, and Data. You can specify multiple values.
   * 
   * - When `Key` is `Originator`, specify the originator of the data flow task. Valid values are User and System.
   * 
   * - When `Key` is `Status`, specify the status of the data flow task. Valid values are Pending, Executing, Failed, Completed, Canceling, and Canceled. You can specify multiple values.
   * 
   * - When `Key` is `CreateTimeBegin`, specify the earliest creation time. Use the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * - When `Key` is `CreateTimeEnd`, specify the latest creation time. Use the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * - When `Key` is `StartTimeBegin`, specify the earliest start time. Use the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * - When `Key` is `StartTimeEnd`, specify the latest start time. Use the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * - When `Key` is `EndTimeBegin`, specify the earliest end time. Use the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * - When `Key` is `EndTimeEnd`, specify the latest end time. Use the `yyyy-MM-ddTHH:mmZ` format.
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
   * - CPFS General-purpose: The ID must start with `cpfs-`, such as cpfs-099394bd928c\\*\\*\\*\\*.
   * 
   * - CPFS for AI Computing: The ID must start with `bmcpfs-`, such as bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * A collection of filters.
   * 
   * **if can be null:**
   * false
   */
  filters?: DescribeDataFlowTasksRequestFilters[];
  /**
   * @remarks
   * The maximum number of results to return per page.
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
   * The pagination token for the next page of results. If the response is truncated, use this token in your next request to retrieve the subsequent page.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to return report information.
   * 
   * - True (default): Includes reports in the response.
   * 
   * - False: Excludes reports from the response.
   * 
   * > * Set this parameter to False to speed up the query.
   * >
   * > * This parameter is supported only in CPFS for AI Computing.
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

