// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDrmUsageDataResponseBodyDrmUsageDataDataModule extends $dara.Model {
  /**
   * @remarks
   * The number of times DRM-encrypted live streams are requested.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The domain name. If the value of SplitBy includes domain, the returned data is grouped by domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The DRM type. If the value of SplitBy includes drm_type, the returned data is grouped by DRM type.
   * 
   * @example
   * Widevine
   */
  drmType?: string;
  /**
   * @remarks
   * The ID of the region. If the value of SplitBy includes region, the returned data is grouped by region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2021-05-01T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domain: 'Domain',
      drmType: 'DrmType',
      region: 'Region',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domain: 'string',
      drmType: 'string',
      region: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDrmUsageDataResponseBodyDrmUsageData extends $dara.Model {
  dataModule?: DescribeLiveDrmUsageDataResponseBodyDrmUsageDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDrmUsageDataResponseBodyDrmUsageDataDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDrmUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage of the DRM encryption service at each time interval.
   */
  drmUsageData?: DescribeLiveDrmUsageDataResponseBodyDrmUsageData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91FC2D9D-B042-4634-8A5C-7B8E7482C22D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      drmUsageData: 'DrmUsageData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drmUsageData: DescribeLiveDrmUsageDataResponseBodyDrmUsageData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.drmUsageData && typeof (this.drmUsageData as any).validate === 'function') {
      (this.drmUsageData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

