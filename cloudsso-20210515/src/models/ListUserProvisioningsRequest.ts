// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserProvisioningsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request. If this is your first time to call this operation, you do not need to specify the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return is larger than the value of `MaxResults`, the entries are truncated. The system returns entries based on the value of `MaxResults`, and does not return the excess entries. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * 27EbL9j4ZgZjsMZFqbZFgbwQ1VXFU1Khcpx9e2vrW1zwzTBmTGWaM7ixHhRin8SCsxaJdazYVCzeKc2UF2QkyGb83cPhr8ZxrzoaiTd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * u-88d73u*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: The identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * RD-Account
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning. The value is fixed as the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * User
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

