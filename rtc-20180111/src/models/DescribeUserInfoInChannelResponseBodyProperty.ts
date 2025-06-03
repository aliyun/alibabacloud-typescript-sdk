// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserInfoInChannelResponseBodyProperty extends $dara.Model {
  /**
   * @example
   * 1557909133
   */
  join?: number;
  /**
   * @example
   * 1
   */
  role?: number;
  /**
   * @example
   * xa744sxx8rtobgj****
   */
  session?: string;
  static names(): { [key: string]: string } {
    return {
      join: 'Join',
      role: 'Role',
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      join: 'number',
      role: 'number',
      session: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

