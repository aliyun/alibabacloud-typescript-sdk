// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LiveUpstreamQosDataShrinkRequest extends $dara.Model {
  cdnDomainsShrink?: string;
  cdnIspsShrink?: string;
  cdnProvincesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  kwaiSidcsShrink?: string;
  kwaiTscShrink?: string;
  ownerId?: number;
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  upstreamDomainsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      cdnDomainsShrink: 'CdnDomains',
      cdnIspsShrink: 'CdnIsps',
      cdnProvincesShrink: 'CdnProvinces',
      endTime: 'EndTime',
      kwaiSidcsShrink: 'KwaiSidcs',
      kwaiTscShrink: 'KwaiTsc',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      startTime: 'StartTime',
      upstreamDomainsShrink: 'UpstreamDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnDomainsShrink: 'string',
      cdnIspsShrink: 'string',
      cdnProvincesShrink: 'string',
      endTime: 'string',
      kwaiSidcsShrink: 'string',
      kwaiTscShrink: 'string',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      startTime: 'string',
      upstreamDomainsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

