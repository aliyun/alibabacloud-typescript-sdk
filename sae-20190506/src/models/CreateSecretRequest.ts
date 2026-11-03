// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretRequestSecretData extends $dara.Model {
  /**
   * @remarks
   * The key-value pair data of the Secret. This parameter is required. Format:
   * 
   * {"Data":"{\\"k1\\":\\"v1\\", \\"k2\\":\\"v2\\"}"}
   * 
   * k represents the key, and v represents the value.
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

export class CreateSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace where the Secret instance resides. If the namespace is the default namespace, you only need to specify RegionId, such as `cn-beijing`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The data of the Secret.
   * 
   * This parameter is required.
   */
  secretData?: CreateSecretRequestSecretData;
  /**
   * @remarks
   * The name of the Secret instance. The name can contain digits, letters, and underscores (_), and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-auth-acree
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the Secret instance. Valid values:
   * 
   * - **kubernetes.io/dockerconfigjson**: stores the username and password of an image repository. It is used for authentication when pulling images during deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * kubernetes.io/dockerconfigjson
   */
  secretType?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretData: 'SecretData',
      secretName: 'SecretName',
      secretType: 'SecretType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretData: CreateSecretRequestSecretData,
      secretName: 'string',
      secretType: 'string',
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

