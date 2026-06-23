// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomAttribute } from "./CustomAttribute";


export class GetCustomAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom attribute definition.
   */
  customAttribute?: CustomAttribute;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA51C9E6-0CBC-5BB9-92BD-0C4FE66E1717
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      customAttribute: 'CustomAttribute',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAttribute: CustomAttribute,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.customAttribute && typeof (this.customAttribute as any).validate === 'function') {
      (this.customAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

