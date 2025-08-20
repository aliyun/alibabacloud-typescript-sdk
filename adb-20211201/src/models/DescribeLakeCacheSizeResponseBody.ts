// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakeCacheSizeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The size of the lake cache space. Unit: GB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp10b6646l07akdt
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The size of the data that occupies the lake cache space. Unit: GB.
   * 
   * @example
   * 100
   */
  dataSize?: number;
  /**
   * @remarks
   * Indicates whether the lake cache feature is enabled.
   * 
   * @example
   * true
   */
  enableLakeCache?: boolean;
  /**
   * @remarks
   * The clusters that share the lake cache space.
   */
  instances?: string[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      DBClusterId: 'DBClusterId',
      dataSize: 'DataSize',
      enableLakeCache: 'EnableLakeCache',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      DBClusterId: 'string',
      dataSize: 'number',
      enableLakeCache: 'boolean',
      instances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLakeCacheSizeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The value 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeLakeCacheSizeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeLakeCacheSizeResponseBodyData,
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

