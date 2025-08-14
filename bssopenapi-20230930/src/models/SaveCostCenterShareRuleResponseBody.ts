// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCostCenterShareRuleResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      requestId: 'string',
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

