// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourcesResponseBodyPagingInfoResourcesScriptRuntime } from "./ListResourcesResponseBodyPagingInfoResourcesScriptRuntime";


export class ListResourcesResponseBodyPagingInfoResourcesScript extends $dara.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 123348864897630XXXX
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
  runtime?: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime;
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
      runtime: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime,
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

