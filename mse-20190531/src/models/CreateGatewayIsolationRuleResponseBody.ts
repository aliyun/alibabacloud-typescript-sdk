// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayIsolationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the circuit breaking rule that you create.
   * 
   * @example
   * 608
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94B12406-E44D-57C9-BF93-A8B35BFF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

