// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStorageConfigResponseBodyConfigList extends $dara.Model {
  /**
   * @remarks
   * The configuration item name. Valid values:
   * 
   * *   **AWS_SESSION_TOKEN**: temporary OSS access token (session token).
   * *   **AWS_ACCESS_KEY_ID**: the AccessKey ID of OSS.
   * *   **AWS_SECRET_ACCESS_KEY**: the AccessKey secret of OSS.
   * *   **GLOBAL_S3_BUCKET**: the name of the OSS bucket.
   * *   **TENANT_ID**: the tenant ID of the OSS Prefix (prefix or directory).
   * *   **GLOBAL_S3_ENDPOINT**: the endpoint of OSS.
   * *   **REGION**: the region of OSS.
   * 
   * @example
   * REGION
   */
  name?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * cn-beijing
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStorageConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The storage configurations.
   */
  configList?: DescribeInstanceStorageConfigResponseBodyConfigList[];
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeInstanceStorageConfigResponseBodyConfigList },
      instanceName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

