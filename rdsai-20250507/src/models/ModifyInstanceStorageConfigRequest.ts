// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceStorageConfigRequestConfigList extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item. Valid values:
   * 
   * - **AWS_SESSION_TOKEN** (optional): The temporary session token for OSS. If this parameter is not provided, validation is performed using the AccessKey ID and AccessKey secret.
   * - **AWS_ACCESS_KEY_ID**: The AccessKey ID for OSS.
   * - **AWS_SECRET_ACCESS_KEY**: The AccessKey secret for OSS.
   * - **GLOBAL_S3_BUCKET**: The bucket name in OSS.
   * - **TENANT_ID**: The folder name in OSS. No manual creation is required.
   * - **GLOBAL_S3_ENDPOINT**: The endpoint (access domain name) for OSS.
   * - **REGION**: The region of OSS.
   * 
   * @example
   * TENANT_ID
   */
  name?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * test-prefix
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

export class ModifyInstanceStorageConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   */
  configList?: ModifyInstanceStorageConfigRequestConfigList[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **ModifyInstanceStorageConfig**.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configList: { 'type': 'array', 'itemType': ModifyInstanceStorageConfigRequestConfigList },
      instanceName: 'string',
      regionId: 'string',
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

