// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlrResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Whether the role exists
   * 
   * @example
   * true
   */
  hasRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      hasRole: 'HasRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRole: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

