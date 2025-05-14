// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentryResponseBodySpaceHdIconVO extends $dara.Model {
  /**
   * @example
   * http://
   */
  icon?: string;
  /**
   * @example
   * type
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
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

