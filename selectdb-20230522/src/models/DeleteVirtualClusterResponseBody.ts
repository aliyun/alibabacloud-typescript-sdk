// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVirtualClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * selectdb-cn-wny3li0****-be
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

export class DeleteVirtualClusterResponseBody extends $dara.Model {
  data?: DeleteVirtualClusterResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 06758CAB-1204-5852-A471-29C87D5C1D0F
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
      data: DeleteVirtualClusterResponseBodyData,
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

