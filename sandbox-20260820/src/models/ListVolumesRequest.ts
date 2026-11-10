// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVolumesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first request. To retrieve the next page, set this parameter to the nextToken value returned in the previous response.
   * 
   * @example
   * qxGrXje86XMrYQ51aJMy
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * Filters by storage volume status. Valid values:
   * - CREATING: The storage volume is being created.
   * - AVAILABLE: The storage volume is available.
   * - ERROR: The storage volume is in an error state.
   * - DELETING: The storage volume is being deleted.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * Filters storage volumes by storage class. Valid values: OSS, AGENTIC_BUCKET, AGENTIC_FS, and JUICE_FS.
   * 
   * @example
   * OSS
   */
  storageClass?: string;
  /**
   * @remarks
   * The ID of the team to which the storage volume belongs.
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
   * 210000000
   */
  userID?: string;
  /**
   * @remarks
   * The name of the storage volume. The name must be unique within the team.
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
      storageClass: 'storageClass',
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
      storageClass: 'string',
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

