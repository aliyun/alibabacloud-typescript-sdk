// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * Valid values of N: `[1,20]`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. If the parameter has a value, a value is also required for the tag key of the same N in the corresponding **tag.N.Key**. Otherwise, an error is reported.
   * 
   * Valid values of N: `[1,20]`.
   * 
   * @example
   * product
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

