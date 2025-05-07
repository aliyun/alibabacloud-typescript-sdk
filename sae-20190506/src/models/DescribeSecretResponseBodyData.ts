// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecretResponseBodyDataRelateApps } from "./DescribeSecretResponseBodyDataRelateApps";


export class DescribeSecretResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1593746835111
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The associated application.
   */
  relateApps?: DescribeSecretResponseBodyDataRelateApps[];
  /**
   * @remarks
   * Secret key-value pair data.
   */
  secretData?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the Secret instance.
   * 
   * @example
   * 16
   */
  secretId?: number;
  /**
   * @remarks
   * The name of the Secret instance.
   * 
   * @example
   * registry-auth
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the Secret instance.
   * 
   * @example
   * kubernetes.io/dockerconfigjson
   */
  secretType?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 1593746835111
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      secretData: 'SecretData',
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
      relateApps: { 'type': 'array', 'itemType': DescribeSecretResponseBodyDataRelateApps },
      secretData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
    if(this.secretData) {
      $dara.Model.validateMap(this.secretData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

