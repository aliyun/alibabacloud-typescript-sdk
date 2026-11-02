// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodPackagingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the VOD packaging configuration.
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

