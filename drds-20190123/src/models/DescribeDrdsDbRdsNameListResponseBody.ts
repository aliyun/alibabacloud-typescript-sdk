// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDbRdsNameListResponseBodyInstanceNameList extends $dara.Model {
  instanceName?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceName)) {
      $dara.Model.validateArray(this.instanceName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the instances that are used to store the data of a database.
   */
  instanceNameList?: DescribeDrdsDbRdsNameListResponseBodyInstanceNameList;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 7E6FA2BF-05F2-44DD-95C0-D1B5B8xxxxxx
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
      instanceNameList: 'InstanceNameList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNameList: DescribeDrdsDbRdsNameListResponseBodyInstanceNameList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceNameList && typeof (this.instanceNameList as any).validate === 'function') {
      (this.instanceNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

