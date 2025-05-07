// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelRuleCategoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * false
   */
  select?: boolean;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

