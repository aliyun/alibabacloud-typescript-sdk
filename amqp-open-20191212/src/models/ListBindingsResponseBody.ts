// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBindingsResponseBodyData } from "./ListBindingsResponseBodyData";


export class ListBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListBindingsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0A71208-3E87-4732-81CC-B18E0B4B1***
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
      data: ListBindingsResponseBodyData,
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

