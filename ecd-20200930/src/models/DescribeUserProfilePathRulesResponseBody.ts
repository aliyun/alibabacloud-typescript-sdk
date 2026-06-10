// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath extends $dara.Model {
  path?: string;
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
  path?: string;
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
  blackPath?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath;
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
  desktopGroupId?: string;
  rules?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules[];
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
  requestId?: string;
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

