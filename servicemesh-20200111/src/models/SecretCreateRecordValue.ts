// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SecretCreateRecordValue extends $dara.Model {
  /**
   * @remarks
   * The result of creating the secret. Valid values:
   * 
   * *   `success`: The secret was created.
   * *   `fail`: The secret failed to be created.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The ID of the cluster on the data plane.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8xe10d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The error message returned when exceptions occur. Otherwise, an empty value is returned.
   * 
   * @example
   * timeout
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      clusterId: 'ClusterId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      clusterId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

