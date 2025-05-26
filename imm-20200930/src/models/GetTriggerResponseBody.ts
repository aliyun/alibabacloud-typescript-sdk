// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataIngestion } from "./DataIngestion";


export class GetTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A7A2D0E-D8B8-4DA0-8127-EB32C6******
   */
  requestId?: string;
  /**
   * @remarks
   * The trigger information.
   */
  trigger?: DataIngestion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trigger: DataIngestion,
    };
  }

  validate() {
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

