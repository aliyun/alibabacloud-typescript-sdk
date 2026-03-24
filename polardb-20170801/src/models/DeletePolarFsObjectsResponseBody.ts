// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarFsObjectsResponseBody extends $dara.Model {
  /**
   * @example
   * pfs-2ze0i7*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C890995A-CF06-4F4D-8DB8-DD26C2******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polarFsInstanceId: 'PolarFsInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

