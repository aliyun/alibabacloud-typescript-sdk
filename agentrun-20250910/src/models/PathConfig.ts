// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PathConfig extends $dara.Model {
  /**
   * @remarks
   * The agent runtime version. This parameter takes effect only when `resourceType` is `runtime`.
   */
  agentRuntimeEndpointName?: string;
  /**
   * @remarks
   * The compatible protocol, used to convert the backend response format. This parameter is required only when `resourceType` is `flow`. Valid values: `native` indicates an FnF native call; `openai`, `dify-workflow`, and `dify-chatflow` map to their corresponding compatible APIs.
   * 
   * @example
   * native
   */
  compatibleProtocol?: string;
  /**
   * @remarks
   * The Flow version/alias. This parameter takes effect only when `resourceType` is `flow`. Default value: `Default`.
   * 
   * @example
   * Default
   */
  flowEndpointName?: string;
  /**
   * @remarks
   * Supported methods: HEAD, GET, POST, PUT, DELETE, PATCH, and OPTIONS.
   * 
   * @example
   * [\\"GET\\"]
   */
  methods?: string[];
  /**
   * @remarks
   * The path for this routing rule.
   * 
   * @example
   * /login
   */
  path?: string;
  removeBasePathOnForward?: boolean;
  /**
   * @remarks
   * The resource name.
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type. This type must match the one associated with the credential.
   * 
   * @example
   * runtime
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeEndpointName: 'agentRuntimeEndpointName',
      compatibleProtocol: 'compatibleProtocol',
      flowEndpointName: 'flowEndpointName',
      methods: 'methods',
      path: 'path',
      removeBasePathOnForward: 'removeBasePathOnForward',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeEndpointName: 'string',
      compatibleProtocol: 'string',
      flowEndpointName: 'string',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: 'string',
      removeBasePathOnForward: 'boolean',
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

