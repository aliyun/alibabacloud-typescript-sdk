// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoicemailsRequest extends $dara.Model {
  /**
   * @example
   * 073xxxx7539
   */
  caller?: string;
  /**
   * @example
   * job-125152394144124921
   */
  contactId?: string;
  /**
   * @example
   * 1532707199000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * voicemail-test
   * 
   * @deprecated
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

