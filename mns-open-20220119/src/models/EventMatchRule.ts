// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventMatchRule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rule is matched.
   * 
   * @example
   * true
   */
  matchState?: boolean;
  /**
   * @remarks
   * The full name matching rule.
   * 
   * @example
   * testBucket/folder1/file1
   */
  name?: string;
  /**
   * @remarks
   * The prefix matching rule.
   * 
   * @example
   * testBucket/prefix1xxx
   */
  prefix?: string;
  /**
   * @remarks
   * The suffix matching rule.
   * 
   * @example
   * suffix/xxxx.test
   */
  suffix?: string;
  static names(): { [key: string]: string } {
    return {
      matchState: 'MatchState',
      name: 'Name',
      prefix: 'Prefix',
      suffix: 'Suffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchState: 'boolean',
      name: 'string',
      prefix: 'string',
      suffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

