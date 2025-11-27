// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerConfiguration } from "./ContainerConfiguration";
import { CredentialConfiguration } from "./CredentialConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OssConfiguration } from "./OssConfiguration";


export class TemplateMcpOptions extends $dara.Model {
  enabledTools?: string[];
  /**
   * @example
   * streamable-http
   */
  transport?: string;
  static names(): { [key: string]: string } {
    return {
      enabledTools: 'enabledTools',
      transport: 'transport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledTools: { 'type': 'array', 'itemType': 'string' },
      transport: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enabledTools)) {
      $dara.Model.validateArray(this.enabledTools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateMcpState extends $dara.Model {
  accessEndpoint?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accessEndpoint: 'accessEndpoint',
      status: 'status',
      statusReason: 'statusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessEndpoint: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Template extends $dara.Model {
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * This parameter is required.
   */
  cpu?: number;
  createdAt?: string;
  credentialConfiguration?: CredentialConfiguration;
  description?: string;
  diskSize?: number;
  environmentVariables?: string;
  executionRoleArn?: string;
  lastUpdatedAt?: string;
  logConfiguration?: LogConfiguration;
  mcpOptions?: TemplateMcpOptions;
  mcpState?: TemplateMcpState;
  /**
   * @remarks
   * This parameter is required.
   */
  memory?: number;
  networkConfiguration?: NetworkConfiguration;
  ossConfiguration?: OssConfiguration[];
  resourceName?: string;
  sandboxIdleTimeoutInSeconds?: string;
  sandboxTTLInSeconds?: string;
  status?: string;
  statusReason?: string;
  templateArn?: string;
  templateConfiguration?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  templateType?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      createdAt: 'createdAt',
      credentialConfiguration: 'credentialConfiguration',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      lastUpdatedAt: 'lastUpdatedAt',
      logConfiguration: 'logConfiguration',
      mcpOptions: 'mcpOptions',
      mcpState: 'mcpState',
      memory: 'memory',
      networkConfiguration: 'networkConfiguration',
      ossConfiguration: 'ossConfiguration',
      resourceName: 'resourceName',
      sandboxIdleTimeoutInSeconds: 'sandboxIdleTimeoutInSeconds',
      sandboxTTLInSeconds: 'sandboxTTLInSeconds',
      status: 'status',
      statusReason: 'statusReason',
      templateArn: 'templateArn',
      templateConfiguration: 'templateConfiguration',
      templateId: 'templateId',
      templateName: 'templateName',
      templateType: 'templateType',
      templateVersion: 'templateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerConfiguration: ContainerConfiguration,
      cpu: 'number',
      createdAt: 'string',
      credentialConfiguration: CredentialConfiguration,
      description: 'string',
      diskSize: 'number',
      environmentVariables: 'string',
      executionRoleArn: 'string',
      lastUpdatedAt: 'string',
      logConfiguration: LogConfiguration,
      mcpOptions: TemplateMcpOptions,
      mcpState: TemplateMcpState,
      memory: 'number',
      networkConfiguration: NetworkConfiguration,
      ossConfiguration: { 'type': 'array', 'itemType': OssConfiguration },
      resourceName: 'string',
      sandboxIdleTimeoutInSeconds: 'string',
      sandboxTTLInSeconds: 'string',
      status: 'string',
      statusReason: 'string',
      templateArn: 'string',
      templateConfiguration: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(this.containerConfiguration && typeof (this.containerConfiguration as any).validate === 'function') {
      (this.containerConfiguration as any).validate();
    }
    if(this.credentialConfiguration && typeof (this.credentialConfiguration as any).validate === 'function') {
      (this.credentialConfiguration as any).validate();
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(this.mcpOptions && typeof (this.mcpOptions as any).validate === 'function') {
      (this.mcpOptions as any).validate();
    }
    if(this.mcpState && typeof (this.mcpState as any).validate === 'function') {
      (this.mcpState as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(Array.isArray(this.ossConfiguration)) {
      $dara.Model.validateArray(this.ossConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

