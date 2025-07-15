// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDetectPornDataResponseBodyDetectPornDataDataModule extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The number of reviewed images.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether a quota of free image scanning is available. Valid values:
   * 
   * *   **free**
   * *   **charge**
   * 
   * @example
   * free
   */
  fee?: string;
  /**
   * @remarks
   * The region in which the domain name resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The moderation scenario. Valid values:
   * 
   * *   **porn** (default): pornography
   * *   **terrorism**: terrorism or politically sensitive content
   * *   **ad**: ad violation
   * *   **live**: undesirable scene
   * *   **logo**
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-10T15:00:05Z
   */
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
  /**
   * @remarks
   * The bandwidth data returned at each interval.
   */
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

