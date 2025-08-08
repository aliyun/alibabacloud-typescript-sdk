// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenAPIToolMeta } from "./OpenApitoolMeta";
import { MCPToolMeta } from "./McptoolMeta";


export class ToolsetStatusOutputsMcpServerConfig extends $dara.Model {
  headers?: { [key: string]: string };
  transportType?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      transportType: 'transportType',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      transportType: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToolsetStatusOutputsUrls extends $dara.Model {
  internetUrl?: string;
  intranetUrl?: string;
  static names(): { [key: string]: string } {
    return {
      internetUrl: 'internetUrl',
      intranetUrl: 'intranetUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetUrl: 'string',
      intranetUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToolsetStatusOutputs extends $dara.Model {
  functionArn?: string;
  mcpServerConfig?: ToolsetStatusOutputsMcpServerConfig;
  openApiTools?: OpenAPIToolMeta[];
  tools?: MCPToolMeta[];
  urls?: ToolsetStatusOutputsUrls;
  static names(): { [key: string]: string } {
    return {
      functionArn: 'functionArn',
      mcpServerConfig: 'mcpServerConfig',
      openApiTools: 'openApiTools',
      tools: 'tools',
      urls: 'urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArn: 'string',
      mcpServerConfig: ToolsetStatusOutputsMcpServerConfig,
      openApiTools: { 'type': 'array', 'itemType': OpenAPIToolMeta },
      tools: { 'type': 'array', 'itemType': MCPToolMeta },
      urls: ToolsetStatusOutputsUrls,
    };
  }

  validate() {
    if(this.mcpServerConfig && typeof (this.mcpServerConfig as any).validate === 'function') {
      (this.mcpServerConfig as any).validate();
    }
    if(Array.isArray(this.openApiTools)) {
      $dara.Model.validateArray(this.openApiTools);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    if(this.urls && typeof (this.urls as any).validate === 'function') {
      (this.urls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToolsetStatus extends $dara.Model {
  observedGeneration?: number;
  observedTime?: string;
  outputs?: ToolsetStatusOutputs;
  /**
   * @example
   * Installed
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      outputs: 'outputs',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      observedGeneration: 'number',
      observedTime: 'string',
      outputs: ToolsetStatusOutputs,
      phase: 'string',
    };
  }

  validate() {
    if(this.outputs && typeof (this.outputs as any).validate === 'function') {
      (this.outputs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

