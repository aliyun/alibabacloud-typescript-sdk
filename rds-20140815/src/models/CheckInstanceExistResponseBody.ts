// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceExistResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance exists. Valid values:
   * - **true**: The instance exists.
   * - **false**: The instance does not exist.
   * 
   * @example
   * true
   */
  isExistInstance?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11439B36-F703-49EB-8656-D3C87BE28B57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isExistInstance: 'IsExistInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isExistInstance: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

