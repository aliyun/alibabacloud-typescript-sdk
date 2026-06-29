// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVCUInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the response.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The name of the created instance.
   * 
   * @example
   * instance-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The description of the response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39871ED2-62C0-578F-A32E-B88072D5582F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceName: 'InstanceName',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceName: 'string',
      message: 'string',
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

