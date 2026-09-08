// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersonalNumbersOfUserRequest extends $dara.Model {
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
   * Indicates whether the phone numbers are associated with the agent. If true, the API queries the list of personal outbound phone numbers associated with the UserId. If false, it queries the list of personal outbound phone numbers that can be associated with but are not currently associated with the UserId. This parameter is typically used together with the AddPersonalNumbersToUser API.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isMember?: boolean;
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
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
   * Fuzzy matching based on phone number. Optional. Default value is empty if not specified.
   * 
   * @example
   * 0833
   */
  searchPattern?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user-test@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isMember: 'IsMember',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isMember: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

