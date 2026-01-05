// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SlotStatusDetail } from "./SlotStatusDetail";


export class SlotStatus extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  detail?: SlotStatusDetail;
  /**
   * @example
   * Init Succeed
   */
  message?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      message: 'Message',
      phase: 'Phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: SlotStatusDetail,
      message: 'string',
      phase: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

