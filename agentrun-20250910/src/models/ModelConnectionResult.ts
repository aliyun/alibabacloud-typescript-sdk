// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelConnection } from "./ModelConnection";


export class ModelConnectionResult extends $dara.Model {
  /**
   * @remarks
   * `SUCCESS` indicates a successful request. On failure, this field returns the error type.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The resulting model connection object.
   * 
   * @example
   * {}
   */
  data?: ModelConnection;
  /**
   * @remarks
   * The unique request ID used for troubleshooting.
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModelConnection,
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

