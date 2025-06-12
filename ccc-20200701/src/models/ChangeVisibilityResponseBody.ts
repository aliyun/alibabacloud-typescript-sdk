// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeVisibilityResponseBodyData } from "./ChangeVisibilityResponseBodyData";


export class ChangeVisibilityResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ChangeVisibilityResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Internal service issue. Detail:.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * 24BE19E8-BF7D-4992-A35E-15EBA874F2E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ChangeVisibilityResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

