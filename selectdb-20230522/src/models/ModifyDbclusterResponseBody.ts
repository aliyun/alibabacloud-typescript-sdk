// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterResponseBodyData } from "./ModifyDbclusterResponseBodyData";


export class ModifyDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  data?: ModifyDBClusterResponseBodyData;
  /**
   * @example
   * 0BF61F90-ACED-55DF-A6FE-56714B2BFCF6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      data: ModifyDBClusterResponseBodyData,
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

