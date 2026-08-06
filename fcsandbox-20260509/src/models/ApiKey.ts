// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ApiKey extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the API key.
   * 
   * @example
   * 34f6a4c4-499f-4bbd-baa0-0e699f53abcd
   */
  apiKeyID?: string;
  /**
   * @remarks
   * The masked display value of the API key.
   * 
   * @example
   * e2b_xxxx****xxxx
   */
  apiKeyMask?: string;
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
   * The value of the API key.
   * 
   * @example
   * e2b_xxxxxx79cd777ef8exxxxxx4ad6f1b567cxxxxxx
   */
  apiKeyValue?: string;
  /**
   * @remarks
   * The time when the API key was created.
   * 
   * @example
   * 2023-09-13T08:27:20Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The expiration time of the API key.
   * 
   * @example
   * 2023-10-13T08:27:20Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the API key was last used.
   * 
   * @example
   * 2023-09-14T08:27:20Z
   */
  lastUsedTime?: string;
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
   * The status of the API key. Valid values:
   * - active
   * - inactive
   * 
   * @example
   * active
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
   * The name of the team.
   * 
   * @example
   * 开发团队
   */
  teamName?: string;
  teamPlan?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 12345
   */
  userID?: string;
  /**
   * @remarks
   * The username of the creator.
   * 
   * @example
   * user1
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyID: 'apiKeyID',
      apiKeyMask: 'apiKeyMask',
      apiKeyName: 'apiKeyName',
      apiKeyValue: 'apiKeyValue',
      createdTime: 'createdTime',
      expireTime: 'expireTime',
      lastUsedTime: 'lastUsedTime',
      resourceGroupID: 'resourceGroupID',
      status: 'status',
      teamID: 'teamID',
      teamName: 'teamName',
      teamPlan: 'teamPlan',
      userID: 'userID',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyID: 'string',
      apiKeyMask: 'string',
      apiKeyName: 'string',
      apiKeyValue: 'string',
      createdTime: 'string',
      expireTime: 'string',
      lastUsedTime: 'string',
      resourceGroupID: 'string',
      status: 'string',
      teamID: 'string',
      teamName: 'string',
      teamPlan: 'string',
      userID: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

