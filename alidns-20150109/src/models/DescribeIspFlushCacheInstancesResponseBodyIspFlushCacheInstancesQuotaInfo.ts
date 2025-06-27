// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo extends $dara.Model {
  instanceQuota?: number;
  instanceQuotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      instanceQuota: 'InstanceQuota',
      instanceQuotaUsed: 'InstanceQuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceQuota: 'number',
      instanceQuotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

