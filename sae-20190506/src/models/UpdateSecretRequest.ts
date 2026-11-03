// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretRequestSecretData extends $dara.Model {
  /**
   * @remarks
   * The key-value pair data of the Secret. This parameter is required. The format is as follows:
   * 
   * {"Data":"{\\"k1\\":\\"v1\\", \\"k2\\":\\"v2\\"}"}
   * 
   * k represents the key, and v represents the value. For more information about configuration items, see [Manage and use Secrets](https://help.aliyun.com/document_detail/463383.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {".dockerconfigjson":"eyJhdXRocyI6eyJyZWdpc3RyeS12cGMuY24tYmVpamluZy5hbGl5dW5jcy5jb20iOnsidXNlcm5hbWUiOiJ1c2VybmFtZSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJhdXRoIjoiZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE9In0sInJlZ2lzdHJ5LmNuLWJlaWppbmcuYWxpeXVuY3MuY29tIjp7InVzZXJuYW1lIjoidXNlcm5hbWUiLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiYXV0aCI6ImRYTmxjbTVoYldVNmNHRnpjM2R2Y21RPSJ9fX0="}
   */
  secretData?: string;
  static names(): { [key: string]: string } {
    return {
      secretData: 'SecretData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace where the Secret instance resides. If the Secret instance resides in the default namespace, specify only the RegionId, such as `cn-beijing`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The Secret data.
   * 
   * This parameter is required.
   */
  secretData?: UpdateSecretRequestSecretData;
  /**
   * @remarks
   * The instance ID of the Secret.
   * 
   * This parameter is required.
   * 
   * @example
   * 16
   */
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretData: 'SecretData',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretData: UpdateSecretRequestSecretData,
      secretId: 'number',
    };
  }

  validate() {
    if(this.secretData && typeof (this.secretData as any).validate === 'function') {
      (this.secretData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

