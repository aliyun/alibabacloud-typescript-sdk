// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarFsObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The absolute path of the created directory.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The PolarFS instance id.
   * 
   * @example
   * pfs-test****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The request id.
   * 
   * @example
   * C890995A-CF06-4F4D-8DB8-DD26C2******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      polarFsInstanceId: 'PolarFsInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      polarFsInstanceId: 'string',
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

