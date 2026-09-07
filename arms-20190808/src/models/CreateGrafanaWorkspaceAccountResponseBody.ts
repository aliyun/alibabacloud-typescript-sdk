// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGrafanaWorkspaceAccountResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: { [key: string]: string };
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 528079E6-B69C-5165-B6AF-DA9FC1E96688
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * eac0a8048716731735000007137d000b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

