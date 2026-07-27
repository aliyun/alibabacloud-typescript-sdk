// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceStorageConfigRequestConfigList extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item. Valid values:
   * 
   * - **AWS_SESSION_TOKEN** (optional): the temporary access token (Session Token) for OSS. If this parameter is not specified, AccessKey ID and AccessKey Secret are used for authentication.
   * - **AWS_ACCESS_KEY_ID**: the AccessKey ID for OSS.
   * - **AWS_SECRET_ACCESS_KEY**: the AccessKey Secret for OSS.
   * - **GLOBAL_S3_BUCKET**: the bucket name of OSS.
   * - **TENANT_ID**: the OSS directory name. You do not need to create it in advance.
   * - **GLOBAL_S3_ENDPOINT**: the endpoint of OSS.
   * - **REGION**: the region of OSS.
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
  branchName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, which ensures that the request is not repeated.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of storage configurations.
   */
  configList?: ModifyInstanceStorageConfigRequestConfigList[];
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      clientToken: 'ClientToken',
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
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

