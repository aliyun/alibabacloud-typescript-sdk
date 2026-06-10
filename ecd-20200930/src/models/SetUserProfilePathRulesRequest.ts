// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath extends $dara.Model {
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

export class SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths extends $dara.Model {
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

export class SetUserProfilePathRulesRequestUserProfilePathRule extends $dara.Model {
  blackPath?: SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath;
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
  desktopGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  userProfilePathRule?: SetUserProfilePathRulesRequestUserProfilePathRule[];
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

