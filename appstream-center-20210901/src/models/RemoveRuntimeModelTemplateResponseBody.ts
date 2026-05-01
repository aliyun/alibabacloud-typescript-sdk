// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRuntimeModelTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * Runtime.NotFound
   */
  code?: string;
  /**
   * @example
   * 404
   */
  httpStatusCode?: number;
  /**
   * @example
   * The runtime is not found.
   */
  message?: string;
  /**
   * @example
   * jvs-xxxxx
   */
  runtimeId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      runtimeId: 'RuntimeId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      runtimeId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveRuntimeModelTemplateResponseBody extends $dara.Model {
  data?: RemoveRuntimeModelTemplateResponseBodyData[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': RemoveRuntimeModelTemplateResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

