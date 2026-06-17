// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPolarFsQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Polarlakebase instance.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7F2007D3-7E74-4ECB-89A8-BF130D******
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

