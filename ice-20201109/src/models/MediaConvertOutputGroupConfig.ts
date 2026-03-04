// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaObject } from "./MediaObject";


export class MediaConvertOutputGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The filename for the manifest. This parameter is only applicable when Type is set to Hls or Dash.
   * 
   * @example
   * manifest
   */
  manifestName?: string;
  /**
   * @remarks
   * The directory where all files for this output group are stored.
   */
  outputFileBase?: MediaObject;
  /**
   * @remarks
   * The type of the output group. Valid values:
   * 
   * *   File: Generates one or more standalone files.
   * *   Hls: Generates HLS manifests.
   * *   Dash: Generates DASH manifests.
   * 
   * @example
   * Hls
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      manifestName: 'ManifestName',
      outputFileBase: 'OutputFileBase',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifestName: 'string',
      outputFileBase: MediaObject,
      type: 'string',
    };
  }

  validate() {
    if(this.outputFileBase && typeof (this.outputFileBase as any).validate === 'function') {
      (this.outputFileBase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

