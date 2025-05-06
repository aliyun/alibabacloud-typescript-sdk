// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopConfigurationRecorderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AB2E892E-8A43-5B0F-8FE3-B53ADA53CB2D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  stopConfigurationRecorderResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stopConfigurationRecorderResult: 'StopConfigurationRecorderResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stopConfigurationRecorderResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

