// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRecoveryConditionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp1378****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Indicates whether the restoration conditions are met. Valid values:
   * - **true**: The conditions are met.
   * - **false**: The conditions are not met.
   * 
   * @example
   * true
   */
  isValid?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D563A3E7-6010-45FE-A0CD-9283414C9657
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      isValid: 'IsValid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      isValid: 'boolean',
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

