// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpIncomingResponseHeaderModificationRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 434497172875264
   */
  configId?: number;
  /**
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

