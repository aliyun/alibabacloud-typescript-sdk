// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserProfilePathRulesResponseBodyDataRulesBlackPath extends $dara.Model {
  /**
   * @remarks
   * The excluded path relative to the user profile directory.
   * 
   * @example
   * AppData\Local
   */
  path?: string;
  /**
   * @remarks
   * The path type. Valid values:
   * - `file`: File.
   * - `folder`: Folder.
   * 
   * @example
   * folder
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBodyDataRulesWhitePaths extends $dara.Model {
  /**
   * @remarks
   * The exception path relative to BlackPath.Path.
   * 
   * @example
   * .\Microsoft\Office
   */
  path?: string;
  /**
   * @remarks
   * The path type. Valid values:
   * - `file`: File.
   * - `folder`: Folder.
   * 
   * @example
   * folder
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The file or directory excluded from user profile roaming.
   */
  blackPath?: DescribeUserProfilePathRulesResponseBodyDataRulesBlackPath;
  /**
   * @remarks
   * The list of files or directories that still participate in user profile roaming under the excluded directories.
   */
  whitePaths?: DescribeUserProfilePathRulesResponseBodyDataRulesWhitePaths[];
  static names(): { [key: string]: string } {
    return {
      blackPath: 'BlackPath',
      whitePaths: 'WhitePaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackPath: DescribeUserProfilePathRulesResponseBodyDataRulesBlackPath,
      whitePaths: { 'type': 'array', 'itemType': DescribeUserProfilePathRulesResponseBodyDataRulesWhitePaths },
    };
  }

  validate() {
    if(this.blackPath && typeof (this.blackPath as any).validate === 'function') {
      (this.blackPath as any).validate();
    }
    if(Array.isArray(this.whitePaths)) {
      $dara.Model.validateArray(this.whitePaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The app instance group ID corresponding to the rule. When querying set rules, this is the primary app instance group ID.
   * 
   * @example
   * aig-0bi83v****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The app instance group set ID corresponding to the rule. This is returned when querying set rules.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The user profile roaming storage domain ID bound to the app instance group. This field may be omitted if no domain is bound.
   * 
   * @example
   * domain-existing
   */
  domainId?: string;
  /**
   * @remarks
   * Not enabled. The current query result does not provide the file system ID. The example is used to illustrate the field status.
   * 
   * @example
   * Not applicable (not enabled)
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The user profile roaming switch. A value of `true` indicates that the feature is enabled, and a value of `false` indicates that the feature is disabled.
   */
  profileFollowSwitch?: boolean;
  /**
   * @remarks
   * The remote storage path for user profile roaming. If this path is not separately configured for the app instance group, the app instance group ID is returned.
   * 
   * @example
   * aig-0bi83v****
   */
  remoteStoragePath?: string;
  /**
   * @remarks
   * The path rule type. Valid values:
   * - `Default`: Queries system default rules. Both target IDs can be omitted.
   * - `AppInstanceGroup`: Queries the rules of an app instance group or an app instance group set.
   * 
   * @example
   * AppInstanceGroup
   */
  ruleType?: string;
  /**
   * @remarks
   * The list of user profile roaming path rules.
   */
  rules?: DescribeUserProfilePathRulesResponseBodyDataRules[];
  /**
   * @remarks
   * The storage quota for user profile roaming, in GB. This field may be omitted if it is not configured.
   * 
   * @example
   * 30
   */
  userProfileSize?: number;
  /**
   * @remarks
   * The user profile roaming switch. The value is the same as ProfileFollowSwitch. A value of `true` indicates that the feature is enabled, and a value of `false` indicates that the feature is disabled.
   */
  userProfileSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      domainId: 'DomainId',
      fileSystemId: 'FileSystemId',
      profileFollowSwitch: 'ProfileFollowSwitch',
      remoteStoragePath: 'RemoteStoragePath',
      ruleType: 'RuleType',
      rules: 'Rules',
      userProfileSize: 'UserProfileSize',
      userProfileSwitch: 'UserProfileSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupSetId: 'string',
      domainId: 'string',
      fileSystemId: 'string',
      profileFollowSwitch: 'boolean',
      remoteStoragePath: 'string',
      ruleType: 'string',
      rules: { 'type': 'array', 'itemType': DescribeUserProfilePathRulesResponseBodyDataRules },
      userProfileSize: 'number',
      userProfileSwitch: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserProfilePathRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * InvalidParameter.RuleType
   */
  code?: string;
  /**
   * @remarks
   * The path rules and user profile roaming configurations.
   */
  data?: DescribeUserProfilePathRulesResponseBodyData;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The parameter RuleType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used for troubleshooting.
   * 
   * @example
   * 01A1CEEB-CDFF-18F9-B2BF-9997600D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeUserProfilePathRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

