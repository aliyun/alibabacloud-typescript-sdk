// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageRegionListResponseBodyRegionListRegion extends $dara.Model {
  regionID?: string;
  static names(): { [key: string]: string } {
    return {
      regionID: 'RegionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageRegionListResponseBodyRegionList extends $dara.Model {
  region?: GetStorageRegionListResponseBodyRegionListRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': GetStorageRegionListResponseBodyRegionListRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageRegionListResponseBody extends $dara.Model {
  regionList?: GetStorageRegionListResponseBodyRegionList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionList: 'RegionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionList: GetStorageRegionListResponseBodyRegionList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regionList && typeof (this.regionList as any).validate === 'function') {
      (this.regionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

