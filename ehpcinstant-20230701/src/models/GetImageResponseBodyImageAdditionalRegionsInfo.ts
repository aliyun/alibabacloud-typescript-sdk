// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyImageAdditionalRegionsInfo extends $dara.Model {
  imageId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

