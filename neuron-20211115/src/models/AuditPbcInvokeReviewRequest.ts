// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditPbcInvokeReviewRequest extends $dara.Model {
  approve?: boolean;
  static names(): { [key: string]: string } {
    return {
      approve: 'approve',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approve: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

