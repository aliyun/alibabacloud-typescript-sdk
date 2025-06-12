// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentCallDetailRecordsRequest extends $dara.Model {
  /**
   * @example
   * {"phoneNumber":"1312121****","callingNumber":"1312121****","calledNumber":"1312121****"}
   */
  criteria?: string;
  /**
   * @example
   * 1604639129000
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

