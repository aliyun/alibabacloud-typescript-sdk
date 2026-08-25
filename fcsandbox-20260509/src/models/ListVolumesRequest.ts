// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVolumesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve more results. You do not need to specify this parameter for the first request. For subsequent requests, use the token returned in the previous response.
   * 
   * @example
   * qxGrXje86XMrYQ51aJMy
   */
  nextToken?: string;
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
   * The status of the volume. Valid values:
   * - CREATING
   * - AVAILABLE
   * - ERROR
   * - DELETING
   * 
   * @example
   * CREATING
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
   * 210000000
   */
  userID?: string;
  /**
   * @remarks
   * The name of the volume. The name must be unique within the team.
   * 
   * @example
   * workspace
   */
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceGroupID: 'resourceGroupID',
      status: 'status',
      teamID: 'teamID',
      userID: 'userID',
      volumeName: 'volumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupID: 'string',
      status: 'string',
      teamID: 'string',
      userID: 'string',
      volumeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

