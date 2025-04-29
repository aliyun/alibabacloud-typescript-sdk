// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachKeyPairResponseBodyResultsResult extends $dara.Model {
  /**
   * @remarks
   * The operation status code that is returned. 200 indicates that the operation is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1d6tsvznfghy7y****
   */
  instanceId?: string;
  /**
   * @remarks
   * The result of the operation. For example, if the value of `Code` is 200, the value of `Message` is `successful`.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
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

