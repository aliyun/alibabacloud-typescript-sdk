// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MCPAPIConfiguration extends $dara.Model {
  description?: string;
  exposedUriPath?: string;
  mcpStatisticsEnable?: boolean;
  protocol?: string;
  toolId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      exposedUriPath: 'exposedUriPath',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      protocol: 'protocol',
      toolId: 'toolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      exposedUriPath: 'string',
      mcpStatisticsEnable: 'boolean',
      protocol: 'string',
      toolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

