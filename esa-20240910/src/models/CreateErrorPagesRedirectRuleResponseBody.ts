// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateErrorPagesRedirectRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 427428371703808
   */
  configId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1D7BBB5-9B5B-5A29-8848-398F3CA18A8A
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

