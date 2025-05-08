// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceResponseBodyInstanceIds } from "./CreateInstanceResponseBodyInstanceIds";


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 0 indicates that the request is successful.
   * 
   * >  If you call this operation by using SDKs, the return value is of the integer type. If you call this operation by using common methods or HTTP requests, the return value is of the string type.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The IDs of instances.
   */
  instanceIds?: CreateInstanceResponseBodyInstanceIds;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A431388-2D4B-46F4-A96B-D4E6BD0688C1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceIds: CreateInstanceResponseBodyInstanceIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

