// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageSceneLabelListConfRequest extends $dara.Model {
  /**
   * @example
   * baselineCheck
   */
  imageServiceCode?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageServiceCode: 'ImageServiceCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageServiceCode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

