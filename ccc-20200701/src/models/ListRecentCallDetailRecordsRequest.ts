// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentCallDetailRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Fuzzy search criteria in JSON object format. The object contains three properties that can be combined arbitrarily: phoneNumber (fuzzy search by calling or called number), callingNumber (fuzzy search by calling number), and calledNumber (fuzzy search by called number).
   * 
   * @example
   * {"phoneNumber":"1312121****","callingNumber":"1312121****","calledNumber":"1312121****"}
   */
  criteria?: string;
  /**
   * @remarks
   * End UNIX timestamp. The default value is the current time.
   * 
   * @example
   * 1604639129000
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Page ordinal number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start UNIX timestamp. The default value is the start time of the current day. The earliest allowed time is 180 days before the current time.
   * 
   * @example
   * 1604638129000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

