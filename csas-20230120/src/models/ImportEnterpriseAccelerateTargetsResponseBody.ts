// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportEnterpriseAccelerateTargetsResponseBody extends $dara.Model {
  /**
   * @example
   * 1648723859058501
   */
  data?: string;
  /**
   * @example
   * 305508BD-8A31-5E15-86CE-52D57967C45E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

