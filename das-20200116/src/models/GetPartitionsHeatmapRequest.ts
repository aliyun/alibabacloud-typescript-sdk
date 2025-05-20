// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPartitionsHeatmapRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-hzrciqy62c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time range to be queried. Valid values:
   * 
   * *   **LAST_ONE_HOURS**: the last hour.
   * *   **LAST_SIX_HOURS**: the last six hours.
   * *   **LAST_ONE_DAYS**: the last day.
   * *   **LAST_THREE_DAYS**: the last three days.
   * *   **LAST_SEVEN_DAYS**: the last seven days.
   * 
   * @example
   * LAST_SIX_HOURS
   */
  timeRange?: string;
  /**
   * @remarks
   * The type of the data to be queried. Valid values:
   * 
   * *   **READ_ROWS**: the read rows.
   * *   **WRITTEN_ROWS**: the written rows.
   * *   **READ_WRITTEN_ROWS**: the read and written rows.
   * *   **UPDATE_ROWS**: the updated rows.
   * *   **INSERTED_ROWS**: the inserted rows.
   * *   **DELETED_ROWS**: the deleted rows.
   * *   **READ_ROWS_WITH_DN**: the read rows returned from a data node.
   * *   **WRITTEN_ROWS_WITH_DN**: the written rows returned from a data node.
   * *   **READ_WRITTEN_ROWS_WITH_DN**: the read and written rows returned from a data node.
   * 
   * @example
   * WRITTEN_ROWS_WITH_DN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      timeRange: 'TimeRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      timeRange: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

