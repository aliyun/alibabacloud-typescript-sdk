// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadlockHistogramRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The format is a UNIX timestamp in milliseconds.
   * >Notice: The value is of the Long type. Precision loss may occur during the serialization/deserialization procedure. The value must not be greater than 9007199254740991.</notice>
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
   * > For PolarDB for MySQL instances, you must specify the node ID.
   * 
   * @example
   * pi-bp16v3824rt73****
   */
  nodeId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The format is a UNIX timestamp in milliseconds.
   * 
   * > The start time can be at most 7 days earlier than the end time.
   * 
   * >Notice: The value is of the Long type. Precision loss may occur during the serialization/deserialization procedure. The value must not be greater than 9007199254740991.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * 1731983066000
   */
  startTime?: number;
  /**
   * @remarks
   * The analysis status of the task.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      nodeId: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

