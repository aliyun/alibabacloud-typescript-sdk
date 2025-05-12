// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath } from "./SetUserProfilePathRulesRequestUserProfilePathRuleBlackPath";
import { SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths } from "./SetUserProfilePathRulesRequestUserProfilePathRuleWhitePaths";


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

