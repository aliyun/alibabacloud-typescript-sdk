// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolarFsFileQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarFS instance.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
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

