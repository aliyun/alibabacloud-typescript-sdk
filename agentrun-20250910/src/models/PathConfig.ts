// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PathConfig extends $dara.Model {
  /**
   * @remarks
   * agent runtime 版本（仅当 resourceType 为 runtime 时有效）
   */
  agentRuntimeEndpointName?: string;
  /**
   * @remarks
   * 支持的方法有：HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS
   * 
   * @example
   * [\"GET\"]
   */
  methods?: string[];
  /**
   * @remarks
   * 此条路由规则对应的请求路径。
   * 
   * @example
   * /login
   */
  path?: string;
  /**
   * @remarks
   * 资源名称
   */
  resourceName?: string;
  /**
   * @remarks
   * 资源类型（和凭证关联资源类型一致）
   * 
   * @example
   * runtime
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeEndpointName: 'agentRuntimeEndpointName',
      methods: 'methods',
      path: 'path',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeEndpointName: 'string',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

