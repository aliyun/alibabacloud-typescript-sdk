// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateEmailRequest extends $dara.Model {
  checkGraylist?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx@yyy.com
   */
  email?: string;
  /**
   * @example
   * 20
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      checkGraylist: 'CheckGraylist',
      email: 'Email',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkGraylist: 'boolean',
      email: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

