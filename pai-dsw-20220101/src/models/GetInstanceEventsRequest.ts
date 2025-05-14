// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of events. Default value: 2000.
   * 
   * @example
   * 2000
   */
  maxEventsNum?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The token used to share the URL.
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      startTime: 'StartTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
      startTime: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

