// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesResponseBodyDataResults extends $dara.Model {
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
      updateTime: 'number',
      userId: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

