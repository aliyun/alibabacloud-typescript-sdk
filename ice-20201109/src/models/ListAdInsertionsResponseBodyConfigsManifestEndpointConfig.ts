// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdInsertionsResponseBodyConfigsManifestEndpointConfig extends $dara.Model {
  /**
   * @remarks
   * The prefix of the playback endpoint for HLS manifests.
   */
  hlsPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      hlsPrefix: 'HlsPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

