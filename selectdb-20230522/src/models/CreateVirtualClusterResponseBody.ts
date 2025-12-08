// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * selectdb-cn-7213cjv2ez-be
   */
  dbClusterId?: string;
  /**
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualClusterResponseBody extends $dara.Model {
  data?: CreateVirtualClusterResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5ED62C81-9948-5612-81E1-EA3853752306
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
      data: CreateVirtualClusterResponseBodyData,
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

