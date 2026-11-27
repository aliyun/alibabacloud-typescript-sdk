// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMPULayoutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The layout ID.
   * 
   * @example
   * 2
   */
  layoutId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 760bad53276431c499e30dc36f6b26be
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
      layoutId: 'number',
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

