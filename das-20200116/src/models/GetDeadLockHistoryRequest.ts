// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadLockHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >Notice: 
   * 
   * This parameter is a Long value. To prevent precision loss during serialization and deserialization, make sure that the value does not exceed 9007199254740991.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732069466000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1u5mas9exx7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > Specify the node ID for a PolarDB for MySQL instance.
   * 
   * @example
   * pi-bp16v3824rt73****
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The source of the task:
   * 
   * - **MANUAL** or unspecified: queries tasks for recent deadlock analysis.
   * 
   * - **AUTO**: queries tasks for full deadlock analysis.
   * 
   * >Notice: 
   * 
   * If you set this parameter to AUTO to query tasks for full deadlock analysis, the start time can be a maximum of seven days earlier than the end time.
   * 
   * @example
   * AUTO
   */
  source?: string;
  /**
   * @remarks
   * The start time of the query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >Notice: 
   * 
   * This parameter is a Long value. To prevent precision loss during serialization and deserialization, make sure that the value does not exceed 9007199254740991.
   * 
   * This parameter is required.
   * 
   * @example
   * 1731983066000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      source: 'Source',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      nodeId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      source: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

