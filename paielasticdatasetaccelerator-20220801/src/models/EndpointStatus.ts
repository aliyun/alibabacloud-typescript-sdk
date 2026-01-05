// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EndpointStatusDetail } from "./EndpointStatusDetail";


export class EndpointStatus extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  detail?: EndpointStatusDetail;
  /**
   * @example
   * Init Succeed
   */
  message?: string;
  /**
   * @example
   * Ready
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
      detail: EndpointStatusDetail,
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

