// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddCdnDomainRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. Valid values of N: **1 to 20**.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. Valid values of N: **1 to 20**.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

