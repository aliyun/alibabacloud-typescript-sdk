// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachApplicationPolarFSResponseBody extends $dara.Model {
  /**
   * @remarks
   * Application ID
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * PolarLakeBase instance ID
   * 
   * @example
   * pcs-**************
   */
  polarFSInstanceId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      polarFSInstanceId: 'PolarFSInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      polarFSInstanceId: 'string',
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

