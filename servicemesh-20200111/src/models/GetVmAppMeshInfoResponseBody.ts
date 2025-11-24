// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVmAppMeshInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * ...
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9522f7c9-63a1-4603-b850-37d12a****
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

