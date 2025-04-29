// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachKeyPairResponseBodyResultsResult extends $dara.Model {
  /**
   * @remarks
   * The operation status code returned. 200 indicates that the operation was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-m5eg7be9ndloji64****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation information returned. When the value of Code is 200, the value of Message is successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

