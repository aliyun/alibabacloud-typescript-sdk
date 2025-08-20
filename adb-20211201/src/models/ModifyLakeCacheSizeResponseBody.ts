// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLakeCacheSizeResponseBodyData extends $dara.Model {
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
   * The size of the data that occupies the lake cache space. Unit: GB.
   * 
   * @example
   * 100
   */
  dataSize?: number;
  /**
   * @remarks
   * The clusters that share the lake cache space.
   */
  instances?: string[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      dataSize: 'DataSize',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      dataSize: 'number',
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

export class ModifyLakeCacheSizeResponseBody extends $dara.Model {
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
  data?: ModifyLakeCacheSizeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 494486CE-6F49-574E-B304-29127EA12E36
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
      data: ModifyLakeCacheSizeResponseBodyData,
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

