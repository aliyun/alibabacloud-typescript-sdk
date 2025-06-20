// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeStartApproveResponseBodyData extends $dara.Model {
  approveStatus?: string;
  static names(): { [key: string]: string } {
    return {
      approveStatus: 'ApproveStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

