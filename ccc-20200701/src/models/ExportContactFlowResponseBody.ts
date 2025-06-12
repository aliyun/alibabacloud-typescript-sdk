// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportContactFlowResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * {}
   */
  flowPackageData?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      flowPackageData: 'FlowPackageData',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      flowPackageData: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

