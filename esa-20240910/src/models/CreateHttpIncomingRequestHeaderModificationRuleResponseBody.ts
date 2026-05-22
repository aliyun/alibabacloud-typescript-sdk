// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpIncomingRequestHeaderModificationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C414690-9D7B-5D66-9CD9-AD0B3F25ED49
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

