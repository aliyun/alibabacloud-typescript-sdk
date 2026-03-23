// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeADInfoResponseBody extends $dara.Model {
  ADDNS?: string;
  ADServerIpAddress?: string;
  ADStatus?: string;
  abnormalReason?: string;
  requestId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ADDNS: 'ADDNS',
      ADServerIpAddress: 'ADServerIpAddress',
      ADStatus: 'ADStatus',
      abnormalReason: 'AbnormalReason',
      requestId: 'RequestId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADDNS: 'string',
      ADServerIpAddress: 'string',
      ADStatus: 'string',
      abnormalReason: 'string',
      requestId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

