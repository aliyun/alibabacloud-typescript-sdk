// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLifecycleRequest extends $dara.Model {
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
   * The number of sessions to query.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * The sorting order of the results. Valid values:
   * 
   * *   ASC: sorted by time in ascending order.
   * *   DESC: sorted by time in descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * A session refers to the process of an instance from startup to failure or shutdown. The sessionNumber indicates the offset value for the instance\\"s session sequence.
   * 
   * @example
   * 1
   */
  sessionNumber?: number;
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
      limit: 'Limit',
      order: 'Order',
      sessionNumber: 'SessionNumber',
      startTime: 'StartTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      order: 'string',
      sessionNumber: 'number',
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

