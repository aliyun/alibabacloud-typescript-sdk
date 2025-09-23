// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppMetadataRequest extends $dara.Model {
  endTimeMs?: number;
  /**
   * @remarks
   * The metadata IDs. Separate multiple IDs with commas (,).
   * 
   * You can obtain the exception ID on the **Exception Analysis** page of your application in the ARMS console.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c9dd447,3c76c565
   */
  metaIds?: string;
  /**
   * @remarks
   * The metadata type. Valid values:
   * 
   * *   sql: obtains an SQL statement based on sqlId.
   * *   exception: obtains the exception stack based on exceptionId.
   * 
   * This parameter is required.
   * 
   * @example
   * sql
   */
  metaType?: string;
  /**
   * @remarks
   * The process identifier (PID) of the application. You can obtain the PID of an application by calling the **ListTraceApps** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ggxw4lnjuz@54364d85b97dc56
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  startTimeMs?: number;
  static names(): { [key: string]: string } {
    return {
      endTimeMs: 'EndTimeMs',
      metaIds: 'MetaIds',
      metaType: 'MetaType',
      pid: 'Pid',
      regionId: 'RegionId',
      startTimeMs: 'StartTimeMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeMs: 'number',
      metaIds: 'string',
      metaType: 'string',
      pid: 'string',
      regionId: 'string',
      startTimeMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

