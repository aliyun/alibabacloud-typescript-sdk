// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelInvocationSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Unit: milliseconds (UNIX timestamp).
   * 
   * @example
   * 1718086400000
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the query. Unit: milliseconds (UNIX timestamp).
   * 
   * @example
   * 1718000000000
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

