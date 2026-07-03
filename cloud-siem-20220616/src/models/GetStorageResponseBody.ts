// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you can change the storage region. You can change the storage region only once. The default value is false. Valid values:
   * 
   * - true: You can change the storage region.
   * 
   * - false: You cannot change the storage region.
   * 
   * @example
   * false
   */
  canOperate?: boolean;
  /**
   * @remarks
   * Indicates whether you have permission to change the storage region. The default value is false. Valid values:
   * 
   * - true: You have permission.
   * 
   * - false: You do not have permission.
   * 
   * @example
   * false
   */
  displayRegion?: boolean;
  /**
   * @remarks
   * The storage region.
   * 
   * If the Data Management hub is in the **cn-hangzhou** region, the default value of **Region** is \\`cn-shanghai\\`. If the Data Management hub is in the **ap-southeast-1** region, the default value of **Region** is \\`ap-southeast-1\\`.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The storage duration in days. The default value is 180. The value must be an integer from 30 to 3000.
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
   * The details of the storage settings.
   */
  data?: GetStorageResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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

