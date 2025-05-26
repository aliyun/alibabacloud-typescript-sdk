// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsActionLogsResponseBodyActionLogs extends $dara.Model {
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * DDL migration job finished
   */
  context?: string;
  /**
   * @remarks
   * The phase during which the log was generated. Valid values:
   * 
   * *   **StructureMigrate**: schema migration.
   * *   **FullDataSync**: full data synchronization.
   * *   **IncrementalSync**: incremental data synchronization.
   * 
   * @example
   * FullDataSync
   */
  stage?: string;
  /**
   * @remarks
   * The type of the log. Multiple log types are separated by commas (,). Valid values:
   * 
   * *   **INFO**
   * *   **WARN**
   * *   **ERROR**
   * 
   * @example
   * INFO,WARN,ERROR
   */
  state?: string;
  /**
   * @remarks
   * The time when the log was generated. The time follows the ISO 8601 standard in the **yyyy-MM-ddTHH:mm:ssZ** format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-01T05:46:30Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      stage: 'Stage',
      state: 'State',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      stage: 'string',
      state: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

