// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStorageConfigResponseBodyConfigList extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item. Valid values:
   * 
   * - **AWS_SESSION_TOKEN**: The temporary access token (session token) for OSS.
   * - **AWS_ACCESS_KEY_ID**: The AccessKey ID for OSS.
   * - **AWS_SECRET_ACCESS_KEY**: The AccessKey secret for OSS.
   * - **GLOBAL_S3_BUCKET**: The name of the OSS bucket.
   * - **TENANT_ID**: The tenant ID of the OSS prefix (prefix or directory).
   * - **GLOBAL_S3_ENDPOINT**: The endpoint of OSS.
   * - **REGION**: The region of OSS.
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
   * A reserved parameter.
   * 
   * @example
   * A reserved parameter
   */
  branchName?: string;
  /**
   * @remarks
   * The list of storage configurations.
   */
  configList?: DescribeInstanceStorageConfigResponseBodyConfigList[];
  /**
   * @remarks
   * The instance ID of the AI application.
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
      branchName: 'BranchName',
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
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

