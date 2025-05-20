// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventMatchRule extends $dara.Model {
  /**
   * @example
   * true
   */
  matchState?: boolean;
  name?: string;
  prefix?: string;
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

