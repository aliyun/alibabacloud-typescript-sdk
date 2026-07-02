// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKmsInstanceQuotaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the KMS instance to query.
   * 
   * @example
   * kst-bjj62f5ba3dnpb6v8****
   */
  kmsInstanceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - `key`: key quota
   * 
   * - `secret`: secret quota
   * 
   * - `qps`: queries per second (QPS) quota
   * 
   * - `vpc`: Virtual Private Cloud (VPC) quota
   * 
   * @example
   * key
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceId: 'KmsInstanceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

