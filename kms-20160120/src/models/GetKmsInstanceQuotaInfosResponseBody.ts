// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKmsInstanceQuotaInfosResponseBodyKmsInstanceQuotaInfos extends $dara.Model {
  /**
   * @remarks
   * The quota.
   * 
   * @example
   * 12
   */
  resourceQuota?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * key
   */
  resourceType?: string;
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The ID of the KMS instance.
   * 
   * @example
   * kst-hzz6****
   */
  kmsInstanceId?: string;
  /**
   * @remarks
   * An array of quota details for the instance.
   */
  kmsInstanceQuotaInfos?: GetKmsInstanceQuotaInfosResponseBodyKmsInstanceQuotaInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * f1fdfa9d-bd49-418b-942f-8f3e3ec00a4f
   */
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

