// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupAttributeRequestUchConfig extends $dara.Model {
  /**
   * @remarks
   * The type of the parameter. Only query strings are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * QueryString
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter used for consistent hashing.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

