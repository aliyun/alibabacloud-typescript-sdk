// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  /**
   * @example
   * dev
   */
  apiKeyName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
   */
  teamID?: string;
  /**
   * @example
   * 123456789
   */
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupID: 'resourceGroupID',
      status: 'status',
      teamID: 'teamID',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupID: 'string',
      status: 'string',
      teamID: 'string',
      userID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

