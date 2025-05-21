// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAvatarProjectRequestFramesLayersMaterial extends $dara.Model {
  /**
   * @example
   * image/png
   */
  format?: string;
  /**
   * @example
   * 434508
   */
  id?: string;
  /**
   * @example
   * https://alidocs.dingtalk.com/i/nodes/vy20BglGWOxjGpq0C5G4DlN0VA7depqY
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      id: 'id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
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

