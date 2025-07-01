// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowSubTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name.
   * 
   * Valid values:
   * 
   * *   DataFlowIds: filters data flow subtasks by data flow ID.
   * *   DataFlowTaskIds: filters data flow subtasks by data flow task ID.
   * *   DataFlowSubTaskIds: filters data flow subtasks by data streaming task ID.
   * *   Status: filters data flow subtasks by status.
   * *   SrcFilePath: filters data flow subtasks by source file path.
   * *   DstFilePath: filters data flow subtasks by destination file path.
   * 
   * @example
   * DataFlowSubTaskIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to DataFlowIds, set Value to a data flow ID or a part of the data flow ID. You can specify a data flow ID or a group of data flow IDs. You can specify a maximum of 10 data flow IDs. Example: `df-194433a5be31****` or `df-194433a5be31****,df-244433a5be31****`.
   * *   If Key is set to DataFlowTaskIds, set Value to a data flow task ID or a part of the data flow task ID. You can specify a data flow task ID or a group of data flow task IDs. You can specify a maximum of 10 data flow task IDs. Example:  `task-38aa8e890f45****` or `task-38aa8e890f45****,task-27aa8e890f45****`.
   * *   If Key is set to DataFlowSubTaskIds, set Value to a data streaming task ID or a part of the data streaming task ID. You can specify a data streaming task ID or a group of data streaming task IDs. You can specify a maximum of 10 data streaming task IDs. Example: ` subTaskId-370kyfmyknxcyzw****  `or `subTaskId-370kyfmyknxcyzw****,subTaskId-280kyfmyknxcyzw****`.
   * *   If Key is set to Status, set Value to the status of the data flow task. The status can be EXPIRED, CREATED, RUNNING, COMPLETE, CANCELING, FAILED, or CANCELED. Combined query is supported.
   * *   If Key is set to SrcFilePath, set Value to the path of the source file. The path can be up to 1,023 characters in length.
   * *   If Key is set to DstFilePath, set Value to the path of the destination file. The path can be up to 1,023 characters in length.
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

