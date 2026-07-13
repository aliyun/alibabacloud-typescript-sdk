// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventMatchRule extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to match.
   * 
   * @example
   * true
   */
  matchState?: boolean;
  /**
   * @remarks
   * The full name to match.
   * 
   * @example
   * testBucket/folder1/file1
   */
  name?: string;
  /**
   * @remarks
   * The prefix to match.
   * 
   * @example
   * testBucket/prefix1xxx
   */
  prefix?: string;
  /**
   * @remarks
   * The suffix to match.
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

