// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy extends $dara.Model {
  /**
   * @remarks
   * Deny action. Valid values:
   * 
   * - `BLOCK`: Block further execution of the delivery chain
   * 
   * - `BLOCK_RETAG`: Block overwriting and pushing image tags
   * 
   * - `BLOCK_DELETE_TAG`: Block deleting image tags
   * 
   * @example
   * BLOCK
   */
  action?: string;
  /**
   * @remarks
   * Collection of baseline samples to block. Separate multiple baseline sample names with commas.
   * 
   * @example
   * identification,hc_image_exploit
   */
  baselineList?: string;
  /**
   * @remarks
   * Number of scanned vulnerabilities that triggers a block
   * 
   * @example
   * 10
   */
  issueCount?: string;
  /**
   * @remarks
   * The vulnerability Level at which blocking is triggered during a scan
   * 
   * @example
   * HIGH
   */
  issueLevel?: string;
  /**
   * @remarks
   * Collection of CVE vulnerabilities to block. Separate multiple CVE vulnerability names with commas.
   * 
   * @example
   * CVE-2020-8286,CVE-2020-8285
   */
  issueList?: string;
  /**
   * @remarks
   * The logic that triggers blocking upon scan detection
   * 
   * @example
   * AND
   */
  logic?: string;
  /**
   * @remarks
   * The collection of malicious samples to block, with multiple sample names separated by commas
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
   * Deny rules for scan nodes in the delivery chain
   */
  denyPolicy?: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy;
  /**
   * @remarks
   * Retry Count
   * 
   * @example
   * 3
   */
  retry?: number;
  /**
   * @remarks
   * Scan engine for the delivery chain node  
   * 
   * - `SAS_SCAN_SERVICE`, Security Center scan engine (requires paid activation)  
   * - `ACR_SCAN_SERVICE`, ACR scan engine
   * 
   * @example
   * ACR_SCAN_SERVICE
   */
  scanEngine?: string;
  /**
   * @remarks
   * Timeout (in seconds)
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
   * Indicates whether to enable the delivery chain edge zone. Valid values:
   * 
   * - `true`: Enable the delivery chain edge zone.
   * 
   * - `false`: Do not enable the delivery chain edge zone.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Delivery chain edge zone configuration
   */
  nodeConfig?: GetChainResponseBodyChainConfigNodesNodeConfig;
  /**
   * @remarks
   * Delivery chain edge zone name
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
   * source edge zone name
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
   * destination edge zone name
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
   * source edge zone
   */
  from?: GetChainResponseBodyChainConfigRoutersFrom;
  /**
   * @remarks
   * destination edge zone
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
   * Delivery chain configuration ID
   * 
   * @example
   * cci-lz3ycgo69ukt****
   */
  chainConfigId?: string;
  /**
   * @remarks
   * Indicates whether the delivery chain configuration is active. Valid values:
   * 
   * - `true`: The configuration is active.
   * 
   * - `false`: The configuration is not active.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * Each edge zone in the delivery chain
   */
  nodes?: GetChainResponseBodyChainConfigNodes[];
  /**
   * @remarks
   * Execution order relationships between edge zones in the delivery chain
   */
  routers?: GetChainResponseBodyChainConfigRouters[];
  /**
   * @remarks
   * Delivery chain version
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
   * Delivery chain configuration description
   */
  chainConfig?: GetChainResponseBodyChainConfig;
  /**
   * @remarks
   * Delivery chain ID
   * 
   * @example
   * chi-0ops0gsmw5x2****
   */
  chainId?: string;
  /**
   * @remarks
   * Return code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Delivery chain creation time
   * 
   * @example
   * 1638255427000
   */
  createTime?: number;
  /**
   * @remarks
   * Delivery chain description
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Updated At of the delivery chain description
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * Delivery chain name
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * C87993B5-7D61-5CAC-8D64-1AC732DD69FF
   */
  requestId?: string;
  /**
   * @remarks
   * Collection of repositories excluded from delivery chain execution
   */
  scopeExclude?: string[];
  /**
   * @remarks
   * Delivery chain scope ID
   * 
   * @example
   * crr-nyrh2oko32xb****
   */
  scopeId?: string;
  /**
   * @remarks
   * Delivery chain scope type
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

