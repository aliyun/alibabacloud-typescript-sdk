// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateStateConfigurationResponseBodyStateConfiguration } from "./CreateStateConfigurationResponseBodyStateConfiguration";


export class CreateStateConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-DA13E8B00BE9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the desired-state configuration.
   */
  stateConfiguration?: CreateStateConfigurationResponseBodyStateConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stateConfiguration: 'StateConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateConfiguration: CreateStateConfigurationResponseBodyStateConfiguration,
    };
  }

  validate() {
    if(this.stateConfiguration && typeof (this.stateConfiguration as any).validate === 'function') {
      (this.stateConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

