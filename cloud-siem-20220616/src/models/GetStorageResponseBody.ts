// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the storage region can be changed for once. Default value: false Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  canOperate?: boolean;
  /**
   * @remarks
   * Indicates whether the storage region can be changed. Default value: false Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  displayRegion?: boolean;
  /**
   * @remarks
   * The region where the data is stored.
   * 
   * If the data management center is **cn-hangzhou**, the default value of **Region** is cn-shanghai, which specifies the China (Shanghai) region. If the data management center is **ap-southeast-1**, the default value of **Region** is ap-southeast-1, which specifies the Singapore region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The storage period of logs. Unit: day. Default value: 180. Valid values: 30 to 3000.
   * 
   * @example
   * 180
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      canOperate: 'CanOperate',
      displayRegion: 'DisplayRegion',
      region: 'Region',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canOperate: 'boolean',
      displayRegion: 'boolean',
      region: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the storage.
   */
  data?: GetStorageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 97A31C3A-3F9F-5866-8979-5159E3DC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetStorageResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

