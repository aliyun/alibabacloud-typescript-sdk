// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedDataKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the managed data key (DK).
   * 
   * @example
   * example-data-key
   */
  dataKeyName?: string;
  /**
   * @remarks
   * The version number of the returned managed data key (DK).
   * 
   * @example
   * xH6OPUmz
   */
  dataKeyVersionId?: string;
  /**
   * @remarks
   * The credential name that stores the key material of the returned managed data key (DK) version.
   * 
   * @example
   * kms-datakeyversion!example-data-key!xH6OPUmz
   */
  dataKeyVersionName?: string;
  /**
   * @remarks
   * The Base64-encoding plaintext value of the data key (DK).
   * 
   * @example
   * CYueyVmZJ2MfA1VSZV2jCbFT8bO7StAvBnHacplr9aI=
   */
  plaintext?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 4bd560a1-729e-45f1-a3d9-b2a33d61046b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataKeyName: 'DataKeyName',
      dataKeyVersionId: 'DataKeyVersionId',
      dataKeyVersionName: 'DataKeyVersionName',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataKeyName: 'string',
      dataKeyVersionId: 'string',
      dataKeyVersionName: 'string',
      plaintext: 'string',
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

