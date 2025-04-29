// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEciScalingConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * The request ID is consistently returned in the response, irrespective of whether the request is executed successfully or encounters an error.
   * 
   * @example
   * 45D5B0AD-3B00-4A9B-9911-6D5303B06712
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

