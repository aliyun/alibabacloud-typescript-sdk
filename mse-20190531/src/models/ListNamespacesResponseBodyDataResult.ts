// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 3
   */
  appCount?: number;
  /**
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  createTime?: number;
  describe?: string;
  /**
   * @example
   * 6
   */
  instanceCount?: number;
  /**
   * @example
   * myNamespace
   */
  namespace?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  tags?: { [key: string]: any };
  /**
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  updateTime?: number;
  /**
   * @example
   * 178*******
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      createTime: 'CreateTime',
      describe: 'Describe',
      instanceCount: 'InstanceCount',
      namespace: 'Namespace',
      region: 'Region',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      createTime: 'number',
      describe: 'string',
      instanceCount: 'number',
      namespace: 'string',
      region: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'number',
      userId: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

