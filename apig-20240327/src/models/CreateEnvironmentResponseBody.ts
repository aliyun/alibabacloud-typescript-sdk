// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvironmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to trace the call link.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Schema of Response
   */
  data?: CreateEnvironmentResponseBodyData;
  /**
   * @remarks
   * rg-acfmycs5expl7oq
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 3C3B9A12-3868-5EB9-8BEA-F99E03DD125C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEnvironmentResponseBodyData,
      message: 'string',
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

