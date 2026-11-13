// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * dev
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Valid values: 1 to 10000.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of API keys to return per page. Default value: 10. Valid values: 1 to 100.
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
   * Filters API keys by status. Valid values:
   * - active: Enabled.
   * - inactive: Disabled.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
   */
  teamID?: string;
  /**
   * @remarks
   * The user ID of the creator.
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

