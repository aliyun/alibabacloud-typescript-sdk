// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath } from "./DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesBlackPath";
import { DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesWhitePaths } from "./DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRulesWhitePaths";


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

