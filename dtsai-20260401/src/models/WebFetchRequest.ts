// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebFetchRequest extends $dara.Model {
  outputFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      outputFormat: 'OutputFormat',
      regionId: 'RegionId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFormat: 'string',
      regionId: 'string',
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

