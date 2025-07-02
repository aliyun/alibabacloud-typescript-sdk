// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * 状态码。
   * 
   * @example
   * OutOfStock
   */
  code?: string;
  /**
   * @remarks
   * 状态变化信息。
   * 
   * @example
   * The requested resource is sold out in the specified zone, try other types of resources or other regions and zones.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

