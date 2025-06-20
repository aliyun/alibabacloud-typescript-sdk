// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeStartResponseBodyData extends $dara.Model {
  approveResultUrl?: string;
  checkResultUrl?: string;
  status?: string;
  subSatus?: string;
  static names(): { [key: string]: string } {
    return {
      approveResultUrl: 'ApproveResultUrl',
      checkResultUrl: 'CheckResultUrl',
      status: 'Status',
      subSatus: 'SubSatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveResultUrl: 'string',
      checkResultUrl: 'string',
      status: 'string',
      subSatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

