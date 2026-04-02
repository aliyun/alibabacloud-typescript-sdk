// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnabledFilter extends $dara.Model {
  /**
   * @remarks
   * 精确匹配
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

