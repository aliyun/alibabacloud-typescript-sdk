// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckChannelResponseBodyAudit extends $dara.Model {
  channel?: string;
  createTime?: string;
  customerId?: string;
  legalSwitch?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      createTime: 'CreateTime',
      customerId: 'CustomerId',
      legalSwitch: 'LegalSwitch',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      createTime: 'string',
      customerId: 'string',
      legalSwitch: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckChannelResponseBody extends $dara.Model {
  audit?: GetCheckChannelResponseBodyAudit;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      audit: 'Audit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audit: GetCheckChannelResponseBodyAudit,
      requestId: 'string',
    };
  }

  validate() {
    if(this.audit && typeof (this.audit as any).validate === 'function') {
      (this.audit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

