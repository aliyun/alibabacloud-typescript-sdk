// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretRequestSecretData extends $dara.Model {
  /**
   * @remarks
   * The information about the key-value pairs of the Secret. This parameter is required. The following formats are supported:
   * 
   * {"Data":"{"k1":"v1", "k2":"v2"}"}
   * 
   * k specifies a key and v specifies a value. For more information, see [Manage a Kubernetes Secret](https://help.aliyun.com/document_detail/463383.html).
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
   * The ID of the namespace where the Secret resides. If the namespace is the default namespace, you need to only enter the region ID, such as `cn-beijing`.
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

