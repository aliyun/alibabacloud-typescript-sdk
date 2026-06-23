// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopProcessInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * A token to ensure that the request is idempotent. We recommend that you use a universally unique identifier (UUID).
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The process instance ID. This operation supports approval forms from both the old and new versions of Security Center.
   * 
   * This parameter is required.
   * 
   * @example
   * 176906667488145
   */
  processInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      processInstanceId: 'ProcessInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      processInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

