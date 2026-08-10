// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * dev
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of teams to display per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - active
   * - inactive
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
   */
  teamID?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
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

