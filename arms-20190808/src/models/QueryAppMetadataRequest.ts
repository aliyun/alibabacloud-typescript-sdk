// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppMetadataRequest extends $dara.Model {
  endTimeMs?: number;
  /**
   * @remarks
   * The metadata IDs. Use a comma (,) to separate multiple IDs.
   * 
   * You can obtain the exception ID on the **exception analysis** page of the target application in the ARMS console.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c9dd447,3c76c565
   */
  metaIds?: string;
  /**
   * @remarks
   * The type of the metadata. Valid values:
   * 
   * - sql: Retrieves the SQL statement by sqlId.
   * 
   * - exception: Retrieves the exception stack by exceptionId.
   * 
   * This parameter is required.
   * 
   * @example
   * sql
   */
  metaType?: string;
  /**
   * @remarks
   * The application ID. To obtain the ID, call the **ListTraceApps** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ggxw4lnjuz@54364d85b******
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

