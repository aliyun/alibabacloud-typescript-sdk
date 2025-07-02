// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeGroupStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * 状态码。
   * 
   * @example
   * MissingParameter
   */
  code?: string;
  /**
   * @remarks
   * 描述信息。
   * 
   * @example
   * The instance type is required.
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

