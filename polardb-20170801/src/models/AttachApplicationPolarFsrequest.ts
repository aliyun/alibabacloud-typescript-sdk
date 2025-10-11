// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachApplicationPolarFSRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * LT**********************
   */
  polarFSAccessKeyId?: string;
  /**
   * @example
   * H3****************************
   */
  polarFSAccessKeySecret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pcs-**************
   */
  polarFSInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      polarFSAccessKeyId: 'PolarFSAccessKeyId',
      polarFSAccessKeySecret: 'PolarFSAccessKeySecret',
      polarFSInstanceId: 'PolarFSInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      polarFSAccessKeyId: 'string',
      polarFSAccessKeySecret: 'string',
      polarFSInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

