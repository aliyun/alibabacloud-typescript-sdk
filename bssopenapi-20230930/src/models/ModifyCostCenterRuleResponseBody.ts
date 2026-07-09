// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostCenterRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Financial unit allocation rule ID
   * 
   * @example
   * 5632
   */
  data?: number;
  /**
   * @remarks
   * Response metadata
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      metadata: 'any',
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

