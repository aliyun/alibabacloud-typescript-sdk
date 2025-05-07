// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSecretsResponseBodyDataSecretsRelateApps } from "./ListSecretsResponseBodyDataSecretsRelateApps";


export class ListSecretsResponseBodyDataSecrets extends $dara.Model {
  /**
   * @remarks
   * The time when the Secret was created.
   * 
   * @example
   * 1593760185111
   */
  createTime?: number;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The associated applications.
   */
  relateApps?: ListSecretsResponseBodyDataSecretsRelateApps[];
  /**
   * @remarks
   * The Secret ID.
   * 
   * @example
   * 16
   */
  secretId?: number;
  /**
   * @remarks
   * The Secret name.
   * 
   * @example
   * registry-auth
   */
  secretName?: string;
  /**
   * @remarks
   * The Secret type.
   * 
   * Set the value to **kubernetes.io/dockerconfigjson**. The value indicates the secret for the username and password of the image repository and is used for authentication when images are pulled during application deployment.
   * 
   * @example
   * kubernetes.io/dockerconfigjson
   */
  secretType?: string;
  /**
   * @remarks
   * The time when the Secret was updated.
   * 
   * @example
   * 1593760185111
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      secretId: 'SecretId',
      secretName: 'SecretName',
      secretType: 'SecretType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': ListSecretsResponseBodyDataSecretsRelateApps },
      secretId: 'number',
      secretName: 'string',
      secretType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.relateApps)) {
      $dara.Model.validateArray(this.relateApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

