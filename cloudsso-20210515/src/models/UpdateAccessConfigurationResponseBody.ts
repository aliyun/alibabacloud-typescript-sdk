// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAccessConfigurationResponseBodyAccessConfiguration } from "./UpdateAccessConfigurationResponseBodyAccessConfiguration";


export class UpdateAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access configuration.
   */
  accessConfiguration?: UpdateAccessConfigurationResponseBodyAccessConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B13E4EE-3853-5852-9165-597C32AD8FB7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfiguration: 'AccessConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfiguration: UpdateAccessConfigurationResponseBodyAccessConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessConfiguration && typeof (this.accessConfiguration as any).validate === 'function') {
      (this.accessConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

