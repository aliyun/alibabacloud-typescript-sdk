// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAdInsertionResponseBodyConfigManifestEndpointConfig extends $dara.Model {
  /**
   * @remarks
   * DASH清单播放端点前缀
   */
  dashPrefix?: string;
  /**
   * @remarks
   * The prefix of the playback endpoint for HLS manifests.
   */
  hlsPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      dashPrefix: 'DashPrefix',
      hlsPrefix: 'HlsPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashPrefix: 'string',
      hlsPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

