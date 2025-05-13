// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeployMachineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C37CE536-6C0F-4778-9B59-6D94C7F7EB63
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the ECS instances are changed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

