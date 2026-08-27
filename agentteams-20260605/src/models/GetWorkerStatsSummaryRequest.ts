// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerStatsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for statistics collection. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1720054400000
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * inst-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time for statistics collection. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1719504000000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

