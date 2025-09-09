// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstanceVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current version of the instance.
   * 
   * @example
   * 5.3.12-15682777
   */
  instanceVersion?: string;
  /**
   * @remarks
   * The latest version of the instance.
   * 
   * @example
   * 5.4.12-16315258
   */
  newestVersion?: string;
  static names(): { [key: string]: string } {
    return {
      instanceVersion: 'InstanceVersion',
      newestVersion: 'NewestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceVersion: 'string',
      newestVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the instance version.
   */
  data?: DescribeDrdsInstanceVersionResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceVersionResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

