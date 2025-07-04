// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterNamesResponseBodyResult } from "./ListClusterNamesResponseBodyResult";


export class ListClusterNamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * F6E3D968-529C-5C40-AFDD-133A8B8FD930
   */
  requestId?: string;
  /**
   * @remarks
   * The result set.
   */
  result?: ListClusterNamesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListClusterNamesResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

