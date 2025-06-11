// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAccessConfigurationResponseBodyAccessConfiguration } from "./GetAccessConfigurationResponseBodyAccessConfiguration";


export class GetAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access configuration.
   */
  accessConfiguration?: GetAccessConfigurationResponseBodyAccessConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E40508-483B-52F6-993C-D880B0F87591
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
      accessConfiguration: GetAccessConfigurationResponseBodyAccessConfiguration,
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

