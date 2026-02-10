// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDrmUsageDataResponseBodyDrmUsageDataDataModule extends $dara.Model {
  count?: number;
  domain?: string;
  drmType?: string;
  region?: string;
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

