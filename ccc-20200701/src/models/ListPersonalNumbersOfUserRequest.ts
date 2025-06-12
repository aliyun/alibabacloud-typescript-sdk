// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersonalNumbersOfUserRequest extends $dara.Model {
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
   * true
   */
  isMember?: boolean;
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
   * 0833
   */
  searchPattern?: string;
  /**
   * @remarks
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

