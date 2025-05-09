// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler } from "./GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler";


export class GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers extends $dara.Model {
  currentHandler?: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler[];
  static names(): { [key: string]: string } {
    return {
      currentHandler: 'CurrentHandler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentHandler: { 'type': 'array', 'itemType': GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler },
    };
  }

  validate() {
    if(Array.isArray(this.currentHandler)) {
      $dara.Model.validateArray(this.currentHandler);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

