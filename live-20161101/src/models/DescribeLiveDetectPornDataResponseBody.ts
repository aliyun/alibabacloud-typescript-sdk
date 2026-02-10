// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDetectPornDataResponseBodyDetectPornDataDataModule extends $dara.Model {
  app?: string;
  count?: number;
  domain?: string;
  fee?: string;
  region?: string;
  scene?: string;
  stream?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      count: 'Count',
      domain: 'Domain',
      fee: 'Fee',
      region: 'Region',
      scene: 'Scene',
      stream: 'Stream',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      count: 'number',
      domain: 'string',
      fee: 'string',
      region: 'string',
      scene: 'string',
      stream: 'string',
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

export class DescribeLiveDetectPornDataResponseBodyDetectPornData extends $dara.Model {
  dataModule?: DescribeLiveDetectPornDataResponseBodyDetectPornDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDetectPornDataResponseBodyDetectPornDataDataModule },
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

export class DescribeLiveDetectPornDataResponseBody extends $dara.Model {
  detectPornData?: DescribeLiveDetectPornDataResponseBodyDetectPornData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B955107D-E658-4E77-B913-E0AC3D31693E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectPornData: 'DetectPornData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectPornData: DescribeLiveDetectPornDataResponseBodyDetectPornData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.detectPornData && typeof (this.detectPornData as any).validate === 'function') {
      (this.detectPornData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

