// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoicemailsRequest extends $dara.Model {
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 073xxxx7539
   */
  caller?: string;
  /**
   * @remarks
   * The ID of the call. You can use this parameter to query the record of a specific call. You can obtain the contact ID from the softphone SDK during a call. If you specify this parameter, other query parameters are ignored.
   * 
   * @example
   * job-125152394144124921
   */
  contactId?: string;
  /**
   * @remarks
   * The end time of the query range. This is a UNIX timestamp in milliseconds. The default value is the current time.
   * 
   * @example
   * 1532707199000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Cloud Contact Center (CC) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the voicemail.
   * 
   * @example
   * voicemail-test
   * 
   * @deprecated
   */
  name?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query range. This is a UNIX timestamp in milliseconds. The default value is 00:00 on the current day.
   * 
   * @example
   * 1532448000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      contactId: 'ContactId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      contactId: 'string',
      endTime: 'number',
      instanceId: 'string',
      name: 'string',
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

