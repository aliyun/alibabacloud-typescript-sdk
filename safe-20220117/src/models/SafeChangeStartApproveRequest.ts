// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeStartApproveRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  creatorEmpId?: string;
  extraInfo?: string;
  reqTimestamp?: number;
  sourceOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      creatorEmpId: 'CreatorEmpId',
      extraInfo: 'ExtraInfo',
      reqTimestamp: 'ReqTimestamp',
      sourceOrderId: 'SourceOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      creatorEmpId: 'string',
      extraInfo: 'string',
      reqTimestamp: 'number',
      sourceOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

