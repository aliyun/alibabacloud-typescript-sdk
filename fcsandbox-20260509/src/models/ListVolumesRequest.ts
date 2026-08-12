// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVolumesRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @example
   * qxGrXje86XMrYQ51aJMy
   */
  nextToken?: string;
  /**
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
   */
  teamID?: string;
  /**
   * @example
   * 210000000
   */
  userID?: string;
  /**
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

