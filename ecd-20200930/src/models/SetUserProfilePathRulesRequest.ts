// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath extends $dara.Model {
  /**
   * @remarks
   * The blacklist path.
   * 
   * @example
   * AppLocal/Data
   */
  path?: string;
  /**
   * @remarks
   * The path type.
   * 
   * Valid values:
   * 
   * *   file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   folder
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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

export class SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths extends $dara.Model {
  /**
   * @remarks
   * The whitelist path.
   * 
   * @example
   * whitePath
   */
  path?: string;
  /**
   * @remarks
   * The path type.
   * 
   * Valid values:
   * 
   * *   file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   folder
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * file
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

export class SetUserProfilePathRulesRequestUserProfilePathRule extends $dara.Model {
  /**
   * @remarks
   * The directory in the blacklist.
   */
  blackPath?: SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath;
  /**
   * @remarks
   * The directories that you want to configure in the whitelist.
   */
  whitePaths?: SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths[];
  static names(): { [key: string]: string } {
    return {
      blackPath: 'BlackPath',
      whitePaths: 'WhitePaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackPath: SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath,
      whitePaths: { 'type': 'array', 'itemType': SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths },
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

export class SetUserProfilePathRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The desktop group ID.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The directories that you want to configure in the blacklist and whitelist.
   */
  userProfilePathRule?: SetUserProfilePathRulesRequestUserProfilePathRule[];
  /**
   * @remarks
   * The directory type that you want to configure.
   * 
   * Valid values:
   * 
   * *   Both_Default_DesktopGroup
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DesktopGroup
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Default
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DesktopGroup
   */
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      userProfilePathRule: 'UserProfilePathRule',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      userProfilePathRule: { 'type': 'array', 'itemType': SetUserProfilePathRulesRequestUserProfilePathRule },
      userProfileRuleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userProfilePathRule)) {
      $dara.Model.validateArray(this.userProfilePathRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

