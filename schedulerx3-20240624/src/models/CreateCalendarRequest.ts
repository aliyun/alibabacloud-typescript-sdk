// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCalendarRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the calendar.
   * 
   * This parameter is required.
   * 
   * @example
   * workday
   */
  calendarName?: string;
  /**
   * @remarks
   * A client token to ensure request idempotence. Generate a unique value for this parameter on your client. The token can contain only ASCII characters. Note: If you do not specify this parameter, the system automatically uses the Request ID as the client token. The Request ID may be different for each request.
   * 
   * @example
   * 123456789
   */
  clientToken?: string;
  /**
   * @remarks
   * The Cluster ID. You can call the [ListClusters](https://help.aliyun.com/document_detail/28147.html) operation to query Cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The days of each month, specified in a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *   {"month":1,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30,31]},
   *   {"month":2,"days":[3,4,5,6,7,10,11,12,13,14,17,18,19,20,21,24,25,26,27,28]},
   *   {"month":3,"days":[3,4,5,6,7,10,11,12,13,14,17,18,19,20,21,24,25,26,27,28,31]},
   *   {"month":4,"days":[1,2,3,4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30]},
   *   {"month":5,"days":[1,2,5,6,7,8,9,12,13,14,15,16,19,20,21,22,23,26,27,28,29,30]},
   *   {"month":6,"days":[2,3,4,5,6,9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30]},
   *   {"month":7,"days":[1,2,3,4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30,31]},
   *   {"month":8,"days":[1,4,5,6,7,8,11,12,13,14,15,18,19,20,21,22,25,26,27,28,29]},
   *   {"month":9,"days":[1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,22,23,24,25,26,29,30]},
   *   {"month":10,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30,31]},
   *   {"month":11,"days":[3,4,5,6,7,10,11,12,13,14,17,18,19,20,21,24,25,26,27,28]},
   *   {"month":12,"days":[1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,22,23,24,25,26,29,30,31]}
   * ]
   */
  months?: string;
  /**
   * @remarks
   * The year.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      calendarName: 'CalendarName',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      months: 'Months',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarName: 'string',
      clientToken: 'string',
      clusterId: 'string',
      months: 'string',
      year: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

