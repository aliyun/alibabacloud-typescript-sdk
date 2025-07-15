// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LiveUpstreamQosDataRequest extends $dara.Model {
  cdnDomains?: string[];
  cdnIsps?: string[];
  cdnProvinces?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  kwaiSidcs?: string[];
  kwaiTsc?: number[];
  ownerId?: number;
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  upstreamDomains?: string[];
  static names(): { [key: string]: string } {
    return {
      cdnDomains: 'CdnDomains',
      cdnIsps: 'CdnIsps',
      cdnProvinces: 'CdnProvinces',
      endTime: 'EndTime',
      kwaiSidcs: 'KwaiSidcs',
      kwaiTsc: 'KwaiTsc',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      startTime: 'StartTime',
      upstreamDomains: 'UpstreamDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnDomains: { 'type': 'array', 'itemType': 'string' },
      cdnIsps: { 'type': 'array', 'itemType': 'string' },
      cdnProvinces: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      kwaiSidcs: { 'type': 'array', 'itemType': 'string' },
      kwaiTsc: { 'type': 'array', 'itemType': 'number' },
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      startTime: 'string',
      upstreamDomains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cdnDomains)) {
      $dara.Model.validateArray(this.cdnDomains);
    }
    if(Array.isArray(this.cdnIsps)) {
      $dara.Model.validateArray(this.cdnIsps);
    }
    if(Array.isArray(this.cdnProvinces)) {
      $dara.Model.validateArray(this.cdnProvinces);
    }
    if(Array.isArray(this.kwaiSidcs)) {
      $dara.Model.validateArray(this.kwaiSidcs);
    }
    if(Array.isArray(this.kwaiTsc)) {
      $dara.Model.validateArray(this.kwaiTsc);
    }
    if(Array.isArray(this.upstreamDomains)) {
      $dara.Model.validateArray(this.upstreamDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

