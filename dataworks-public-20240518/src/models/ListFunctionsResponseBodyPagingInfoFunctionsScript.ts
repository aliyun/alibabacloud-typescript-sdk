// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime } from "./ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime";


export class ListFunctionsResponseBodyPagingInfoFunctionsScript extends $dara.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: number;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * XXX/OpenAPI/function/function_name
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime;
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
      runtime: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime,
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

