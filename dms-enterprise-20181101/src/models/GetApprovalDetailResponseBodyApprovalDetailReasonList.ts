// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalDetailResponseBodyApprovalDetailReasonList extends $dara.Model {
  reasons?: string[];
  static names(): { [key: string]: string } {
    return {
      reasons: 'Reasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasons: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reasons)) {
      $dara.Model.validateArray(this.reasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

