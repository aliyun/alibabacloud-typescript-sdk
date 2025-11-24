// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SecretDeleteRecordValue extends $dara.Model {
  /**
   * @remarks
   * The result of deleting the secret. Valid values:
   * 
   * *   `success`: The secret was deleted.
   * *   `fail`: The secret failed to be deleted.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
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

