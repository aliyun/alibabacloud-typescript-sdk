// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceQuotasResponseBodyQuotas extends $dara.Model {
  quotaName?: string;
  quotaValue?: string;
  quotaValueType?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValue: 'QuotaValue',
      quotaValueType: 'QuotaValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValue: 'string',
      quotaValueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasResponseBody extends $dara.Model {
  instanceId?: string;
  quotas?: ListInstanceQuotasResponseBodyQuotas[];
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotas: 'Quotas',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotas: { 'type': 'array', 'itemType': ListInstanceQuotasResponseBodyQuotas },
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

