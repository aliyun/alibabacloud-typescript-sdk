// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultKmsInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * kst-hzz65f176a0ogplgq****
   */
  defaultKmsInstanceId?: string;
  /**
   * @example
   * bbc4e9ab-c76f-48ca-9c2a-8535772117e2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultKmsInstanceId: 'DefaultKmsInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultKmsInstanceId: 'string',
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

