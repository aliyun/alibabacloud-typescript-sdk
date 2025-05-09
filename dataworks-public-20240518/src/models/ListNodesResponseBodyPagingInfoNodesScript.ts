// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodesResponseBodyPagingInfoNodesScriptRuntime } from "./ListNodesResponseBodyPagingInfoNodesScriptRuntime";


export class ListNodesResponseBodyPagingInfoNodesScript extends $dara.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 853573334108680XXXX
   */
  id?: number;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListNodesResponseBodyPagingInfoNodesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      path: 'string',
      runtime: ListNodesResponseBodyPagingInfoNodesScriptRuntime,
    };
  }

  validate() {
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

