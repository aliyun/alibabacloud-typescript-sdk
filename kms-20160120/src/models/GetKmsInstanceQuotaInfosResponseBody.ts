// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKmsInstanceQuotaInfosResponseBodyKmsInstanceQuotaInfos extends $dara.Model {
  resourceQuota?: number;
  resourceType?: string;
  usedQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      resourceQuota: 'ResourceQuota',
      resourceType: 'ResourceType',
      usedQuantity: 'UsedQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceQuota: 'number',
      resourceType: 'string',
      usedQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceQuotaInfosResponseBody extends $dara.Model {
  kmsInstanceId?: string;
  kmsInstanceQuotaInfos?: GetKmsInstanceQuotaInfosResponseBodyKmsInstanceQuotaInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceId: 'KmsInstanceId',
      kmsInstanceQuotaInfos: 'KmsInstanceQuotaInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceId: 'string',
      kmsInstanceQuotaInfos: { 'type': 'array', 'itemType': GetKmsInstanceQuotaInfosResponseBodyKmsInstanceQuotaInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kmsInstanceQuotaInfos)) {
      $dara.Model.validateArray(this.kmsInstanceQuotaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

