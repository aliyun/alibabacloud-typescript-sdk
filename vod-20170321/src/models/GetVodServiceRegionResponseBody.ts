// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodServiceRegionResponseBody extends $dara.Model {
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

