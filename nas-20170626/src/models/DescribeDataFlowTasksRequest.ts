// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name.
   * 
   * Valid values:
   * 
   * *   DataFlowIds: filters data flow tasks by data flow ID.
   * *   TaskIds: filters data flow tasks by task ID.
   * *   Originator: filters data flow tasks by task initiator.
   * *   TaskActions: filters data flow tasks by task type.
   * *   DataTypes: filters data flow tasks by data type.
   * *   Status: filters data flow tasks by data flow status.
   * *   CreateTimeBegin: filters data flow tasks that are created after a specified time.
   * *   CreateTimeEnd: filters data flow tasks that are created before a specified time.
   * *   StartTimeBegin: filters data flow tasks that are started after a specified time.
   * *   StartTimeEnd: filters data flow tasks that are started before a specified time.
   * *   EndTimeBegin: filters data flow tasks that are stopped after a specified time.
   * *   EndTimeEnd: filters data flow tasks that are stopped before a specified time.
   * 
   * @example
   * DataFlowIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to DataFlowIds, set Value to a data flow ID or a part of the data flow ID. You can specify a data flow ID or a group of data flow IDs. You can specify a maximum of 10 data flow IDs. Example: `df-194433a5be31****` or `df-194433a512a2****,df-234533a5be31****`.
   * *   If Key is set to TaskId, set Value to a data flow task ID or a part of the data flow task ID. You can specify a data flow task ID or a group of data flow task IDs. You can specify a maximum of 10 data flow task IDs. Example: `task-38aa8e890f45****` or `task-38aa8e890f45****,task-29ae8e890f45****`.
   * *   If Key is set to TaskActions, set Value to the type of data flow task. The task type can be **Import**, **Export**, **Evict**, **Inventory**, **StreamImport**, or **StreamExport**. Combined query is supported. CPFS for LINGJUN supports only the Import, Export, StreamImport, and StreamExport tasks. Only CPFS for LINGJUN V2.6.0 and later support the StreamImport and StreamExport tasks.
   * *   If Key is set to DataTypes, set Value to the data type of the data flow task. The data type can be MetaAndData, Metadata, or Data. Combined query is supported.
   * *   If Key is set to Originator, set Value to the initiator of the data flow task. The initiator can be User or System.
   * *   If Key is set to Status, set Value to the status of the data flow task. The status can be Pending, Executing, Failed, Completed, Canceling, or Canceled. Combined query is supported.
   * *   If Key is set to CreateTimeBegin, set Value to the beginning of the time range to create the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to CreateTimeEnd, set Value to the end of the time range to create the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to StartTimeBegin, set Value to the beginning of the time range to start the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to StartTimeEnd, set Value to the end of the time range to start the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to EndTimeBegin, set Value to the beginning of the time range to stop the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to EndTimeEnd, set Value to the end of the time range to stop the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * 
   * @example
   * dfid-12345678
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
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The details about filters.
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
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

