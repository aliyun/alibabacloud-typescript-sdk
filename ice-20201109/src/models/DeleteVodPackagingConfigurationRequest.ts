// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVodPackagingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the packaging configuration.
   * 
   * @example
   * hls_3s
   */
  configurationName?: string;
  static names(): { [key: string]: string } {
    return {
      configurationName: 'ConfigurationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

