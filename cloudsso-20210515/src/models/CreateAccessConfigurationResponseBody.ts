// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAccessConfigurationResponseBodyAccessConfiguration } from "./CreateAccessConfigurationResponseBodyAccessConfiguration";


export class CreateAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access configuration.
   */
  accessConfiguration?: CreateAccessConfigurationResponseBodyAccessConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3A41736-A050-50B6-ABC5-590F376A0044
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
      accessConfiguration: CreateAccessConfigurationResponseBodyAccessConfiguration,
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

