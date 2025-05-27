// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable authentication.
   * 
   * @example
   * false
   */
  isValueSecret?: string;
  /**
   * @remarks
   * The key of the request header.
   * 
   * @example
   * keyDemo
   */
  key?: string;
  /**
   * @remarks
   * The value of the request header.
   * 
   * @example
   * keyValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

