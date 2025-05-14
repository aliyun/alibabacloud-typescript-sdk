// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodPackagingAssetResponseBodyAssetEgressEndpoints extends $dara.Model {
  /**
   * @remarks
   * The name of the packaging configuration.
   * 
   * @example
   * hls_3s
   */
  configurationName?: string;
  /**
   * @remarks
   * The asset status. Valid values:
   * 
   * *   Queuing: The asset is waiting for packaging.
   * *   Playable: The asset is packaged and playable.
   * *   Failed: The asset fails to be packaged.
   * 
   * @example
   * Playable
   */
  status?: string;
  /**
   * @remarks
   * The playback URL. If the asset fails to be packaged, no playback URL is returned.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      configurationName: 'ConfigurationName',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationName: 'string',
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

