// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddManifestEditTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the template. Spaces are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * add-multilang-tracks
   */
  name?: string;
  /**
   * @remarks
   * The video encoding configuration, such as `{"Codec":"H.264","Bitrate":"5000000"}`.
   * 
   * @example
   * {"Codec":"H.264","Bitrate":"5000000"}
   */
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templates: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

