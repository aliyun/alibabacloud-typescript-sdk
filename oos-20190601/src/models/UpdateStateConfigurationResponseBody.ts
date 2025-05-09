// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateStateConfigurationResponseBodyStateConfiguration } from "./UpdateStateConfigurationResponseBodyStateConfiguration";


export class UpdateStateConfigurationResponseBody extends $dara.Model {
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
   * The details of the configuration.
   */
  stateConfiguration?: UpdateStateConfigurationResponseBodyStateConfiguration[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stateConfiguration: 'StateConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateConfiguration: { 'type': 'array', 'itemType': UpdateStateConfigurationResponseBodyStateConfiguration },
    };
  }

  validate() {
    if(Array.isArray(this.stateConfiguration)) {
      $dara.Model.validateArray(this.stateConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

