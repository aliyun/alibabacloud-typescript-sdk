// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppLayoutResponseBody extends $dara.Model {
  /**
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 20A6D1E3-1F5F-5440-A4F1-EC7831646FE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
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

