// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plug-in configuration ID.
   * 
   * @example
   * 10
   */
  pluginConfigID?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03A3E2F4-6804-5663-9D5D-2EC47A1*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pluginConfigID: 'PluginConfigID',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginConfigID: 'number',
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

