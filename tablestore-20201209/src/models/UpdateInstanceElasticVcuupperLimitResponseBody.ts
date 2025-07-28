// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceElasticVCUUpperLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot issues.
   * 
   * @example
   * B37BBA04-D827-55C8-B901-5264B904E8C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

