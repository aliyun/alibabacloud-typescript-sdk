// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePermissionApplyOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request order ID.
   */
  flowId?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowId)) {
      $dara.Model.validateArray(this.flowId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

