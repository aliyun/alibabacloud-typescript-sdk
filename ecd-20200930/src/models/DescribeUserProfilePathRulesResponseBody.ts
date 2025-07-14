// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath extends $dara.Model {
  /**
   * @remarks
   * The path.
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

export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesWhitePaths extends $dara.Model {
  /**
   * @remarks
   * The path.
   * 
   * @example
   * games
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

export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules extends $dara.Model {
  /**
   * @remarks
   * The blacklist that is configured.
   */
  blackPath?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath;
  /**
   * @remarks
   * The directories in the whitelist.
   */
  whitePaths?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesWhitePaths[];
  static names(): { [key: string]: string } {
    return {
      blackPath: 'BlackPath',
      whitePaths: 'WhitePaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackPath: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath,
      whitePaths: { 'type': 'array', 'itemType': DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesWhitePaths },
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

export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRule extends $dara.Model {
  /**
   * @remarks
   * The desktop group ID.
   * 
   * @example
   * dg-4i8fvpv6tfs03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The directory rules.
   */
  rules?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules[];
  /**
   * @remarks
   * The directory type that is configured for the directory.
   * 
   * Valid values:
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
   * Default
   */
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      rules: 'Rules',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules },
      userProfileRuleType: 'string',
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
   * The request ID.
   * 
   * @example
   * A87DBB05-653A-5E4B-B72B-5F4A1E07****
   */
  requestId?: string;
  /**
   * @remarks
   * The directory blacklist and whitelist.
   */
  userProfilePathRule?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProfilePathRule: 'UserProfilePathRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProfilePathRule: DescribeUserProfilePathRulesResponseBodyUserProfilePathRule,
    };
  }

  validate() {
    if(this.userProfilePathRule && typeof (this.userProfilePathRule as any).validate === 'function') {
      (this.userProfilePathRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

