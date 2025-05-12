// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

