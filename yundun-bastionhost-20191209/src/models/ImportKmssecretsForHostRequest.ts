// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKMSSecretsForHostRequestSecrets extends $dara.Model {
  /**
   * @remarks
   * The name of the KMS secret.
   * 
   * @example
   * secret
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the KMS secret. Valid values:
   * 
   * - **ECS**: an ECS credential.
   * 
   * @example
   * ECS
   */
  secretType?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      secretType: 'SecretType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      secretType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKMSSecretsForHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the host to import the KMS secrets to.
   * 
   * > Only ECS hosts can import KMS secrets. You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: number;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about region IDs and names, see [Regions and availability zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The KMS secrets to import.
   */
  secrets?: ImportKMSSecretsForHostRequestSecrets[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'number',
      instanceId: 'string',
      regionId: 'string',
      secrets: { 'type': 'array', 'itemType': ImportKMSSecretsForHostRequestSecrets },
    };
  }

  validate() {
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

