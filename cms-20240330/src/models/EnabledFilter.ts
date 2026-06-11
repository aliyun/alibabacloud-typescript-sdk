// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnabledFilter extends $dara.Model {
  /**
   * @remarks
   * The value to filter by. Set to `true` to return only enabled resources. Set to `false` to return only disabled resources.
   */
  eq?: boolean;
  static names(): { [key: string]: string } {
    return {
      eq: 'eq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

