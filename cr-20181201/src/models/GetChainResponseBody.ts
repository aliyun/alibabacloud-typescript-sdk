// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy extends $dara.Model {
  /**
   * @remarks
   * The blocking action. Valid values:
   * 
   * - `BLOCK`: Blocks the delivery chain from continuing execution.
   * 
   * - `BLOCK_RETAG`: Blocks and overwrites the pushed image tag.
   * 
   * - `BLOCK_DELETE_TAG`: Blocks and deletes the image tag.
   * 
   * @example
   * BLOCK
   */
  action?: string;
  /**
   * @remarks
   * The collection of baseline samples to block. Separate multiple baseline sample names with commas (,).
   * 
   * @example
   * identification,hc_image_exploit
   */
  baselineList?: string;
  /**
   * @remarks
   * The number of vulnerabilities that triggers blocking.
   * 
   * @example
   * 10
   */
  issueCount?: string;
  /**
   * @remarks
   * The vulnerability severity level that triggers blocking.
   * 
   * @example
   * HIGH
   */
  issueLevel?: string;
  /**
   * @remarks
   * The collection of CVE vulnerabilities to block. Separate multiple CVE vulnerability names with commas (,).
   * 
   * @example
   * CVE-2020-8286,CVE-2020-8285
   */
  issueList?: string;
  /**
   * @remarks
   * The logic that triggers blocking during scanning.
   * 
   * @example
   * AND
   */
  logic?: string;
  /**
   * @remarks
   * The collection of malicious samples to block. Separate multiple malicious sample names with commas (,).
   * 
   * @example
   * mutate_cockhorse,abnormal_program
   */
  maliciousList?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      baselineList: 'BaselineList',
      issueCount: 'IssueCount',
      issueLevel: 'IssueLevel',
      issueList: 'IssueList',
      logic: 'Logic',
      maliciousList: 'MaliciousList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      baselineList: 'string',
      issueCount: 'string',
      issueLevel: 'string',
      issueList: 'string',
      logic: 'string',
      maliciousList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigNodesNodeConfig extends $dara.Model {
  /**
   * @remarks
   * The blocking policy for the scan node in the delivery chain.
   */
  denyPolicy?: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 3
   */
  retry?: number;
  /**
   * @remarks
   * The scan engine of the delivery chain scan node. Valid values:
   * 
   * - `SAS_SCAN_SERVICE`: Security Center scan engine (requires paid activation).
   * - `ACR_SCAN_SERVICE`: ACR scan engine.
   * 
   * @example
   * ACR_SCAN_SERVICE
   */
  scanEngine?: string;
  /**
   * @remarks
   * The timeout period, in seconds.
   * 
   * @example
   * 900
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      denyPolicy: 'DenyPolicy',
      retry: 'Retry',
      scanEngine: 'ScanEngine',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denyPolicy: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy,
      retry: 'number',
      scanEngine: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(this.denyPolicy && typeof (this.denyPolicy as any).validate === 'function') {
      (this.denyPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigNodes extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the delivery chain node is enabled. Valid values:
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The configuration of the delivery chain node.
   */
  nodeConfig?: GetChainResponseBodyChainConfigNodesNodeConfig;
  /**
   * @remarks
   * The name of the delivery chain node.
   * 
   * @example
   * VULNERABILITY_SCANNING
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      nodeConfig: 'NodeConfig',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      nodeConfig: GetChainResponseBodyChainConfigNodesNodeConfig,
      nodeName: 'string',
    };
  }

  validate() {
    if(this.nodeConfig && typeof (this.nodeConfig as any).validate === 'function') {
      (this.nodeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRoutersFrom extends $dara.Model {
  /**
   * @remarks
   * The name of the source node.
   * 
   * @example
   * DOCKER_IMAGE_BUILD
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRoutersTo extends $dara.Model {
  /**
   * @remarks
   * The name of the destination node.
   * 
   * @example
   * DOCKER_IMAGE_PUSH
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRouters extends $dara.Model {
  /**
   * @remarks
   * The source node.
   */
  from?: GetChainResponseBodyChainConfigRoutersFrom;
  /**
   * @remarks
   * The destination node.
   */
  to?: GetChainResponseBodyChainConfigRoutersTo;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: GetChainResponseBodyChainConfigRoutersFrom,
      to: GetChainResponseBodyChainConfigRoutersTo,
    };
  }

  validate() {
    if(this.from && typeof (this.from as any).validate === 'function') {
      (this.from as any).validate();
    }
    if(this.to && typeof (this.to as any).validate === 'function') {
      (this.to as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration ID of the delivery chain.
   * 
   * @example
   * cci-lz3ycgo69ukt****
   */
  chainConfigId?: string;
  /**
   * @remarks
   * Indicates whether the delivery chain configuration is active. Valid values:
   * 
   * - `true`: Active.
   * 
   * - `false`: Inactive.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The nodes in the delivery chain.
   */
  nodes?: GetChainResponseBodyChainConfigNodes[];
  /**
   * @remarks
   * The execution order between delivery chain nodes.
   */
  routers?: GetChainResponseBodyChainConfigRouters[];
  /**
   * @remarks
   * The version of the delivery chain.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfigId: 'ChainConfigId',
      isActive: 'IsActive',
      nodes: 'Nodes',
      routers: 'Routers',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfigId: 'string',
      isActive: 'boolean',
      nodes: { 'type': 'array', 'itemType': GetChainResponseBodyChainConfigNodes },
      routers: { 'type': 'array', 'itemType': GetChainResponseBodyChainConfigRouters },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.routers)) {
      $dara.Model.validateArray(this.routers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the delivery chain.
   */
  chainConfig?: GetChainResponseBodyChainConfig;
  /**
   * @remarks
   * The delivery chain ID.
   * 
   * @example
   * chi-0ops0gsmw5x2****
   */
  chainId?: string;
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the delivery chain was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1638255427000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the delivery chain.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the delivery chain description was last modified. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the delivery chain.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C87993B5-7D61-5CAC-8D64-1AC732DD69FF
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of repositories excluded from the delivery chain execution.
   */
  scopeExclude?: string[];
  /**
   * @remarks
   * The scope ID of the delivery chain.
   * 
   * @example
   * crr-nyrh2oko32xb****
   */
  scopeId?: string;
  /**
   * @remarks
   * The scope type of the delivery chain.
   * 
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      chainId: 'ChainId',
      code: 'Code',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      scopeExclude: 'ScopeExclude',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: GetChainResponseBodyChainConfig,
      chainId: 'string',
      code: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      name: 'string',
      requestId: 'string',
      scopeExclude: { 'type': 'array', 'itemType': 'string' },
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(this.chainConfig && typeof (this.chainConfig as any).validate === 'function') {
      (this.chainConfig as any).validate();
    }
    if(Array.isArray(this.scopeExclude)) {
      $dara.Model.validateArray(this.scopeExclude);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

