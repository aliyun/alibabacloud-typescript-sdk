// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSecretRequestSecretData } from "./CreateSecretRequestSecretData";


export class CreateSecretRequest extends $dara.Model {
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
  secretData?: CreateSecretRequestSecretData;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registry-auth-acree
   */
  secretName?: string;
  /**
   * @remarks
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

