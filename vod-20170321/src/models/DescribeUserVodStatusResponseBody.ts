// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserVodStatusResponseBody extends $dara.Model {
  enabled?: boolean;
  inDebt?: boolean;
  inDebtOverdue?: boolean;
  onService?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inDebt: 'InDebt',
      inDebtOverdue: 'InDebtOverdue',
      onService: 'OnService',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inDebt: 'boolean',
      inDebtOverdue: 'boolean',
      onService: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

