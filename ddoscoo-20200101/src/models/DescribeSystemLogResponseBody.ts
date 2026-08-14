// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemLogResponseBodySystemLog extends $dara.Model {
  entityObject?: string;
  entityType?: number;
  gmtCreate?: number;
  gmtModified?: number;
  opAccount?: string;
  opAction?: number;
  opDesc?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLogResponseBody extends $dara.Model {
  requestId?: string;
  systemLog?: DescribeSystemLogResponseBodySystemLog[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemLog: 'SystemLog',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemLog: { 'type': 'array', 'itemType': DescribeSystemLogResponseBodySystemLog },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.systemLog)) {
      $dara.Model.validateArray(this.systemLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

