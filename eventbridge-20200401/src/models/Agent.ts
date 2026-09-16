// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Metadata } from "./Metadata";


export class Agent extends $dara.Model {
  createdAt?: number;
  description?: string;
  /**
   * @example
   * 8vHW4mDRxxxxx
   */
  mcpServerId?: string;
  /**
   * @example
   * data-analyze-agent
   */
  mcpServerName?: string;
  metadata?: Metadata;
  name?: string;
  prompt?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      description: 'Description',
      mcpServerId: 'McpServerId',
      mcpServerName: 'McpServerName',
      metadata: 'Metadata',
      name: 'Name',
      prompt: 'Prompt',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      description: 'string',
      mcpServerId: 'string',
      mcpServerName: 'string',
      metadata: Metadata,
      name: 'string',
      prompt: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

