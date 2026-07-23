// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticAgentByInstallTokenResponseBodyData extends $dara.Model {
  activeApiKeyPrefixes?: string[];
  agentId?: string;
  agentName?: string;
  agentType?: string;
  createdAt?: string;
  creationType?: string;
  description?: string;
  ownerId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activeApiKeyPrefixes: 'ActiveApiKeyPrefixes',
      agentId: 'AgentId',
      agentName: 'AgentName',
      agentType: 'AgentType',
      createdAt: 'CreatedAt',
      creationType: 'CreationType',
      description: 'Description',
      ownerId: 'OwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeApiKeyPrefixes: { 'type': 'array', 'itemType': 'string' },
      agentId: 'string',
      agentName: 'string',
      agentType: 'string',
      createdAt: 'string',
      creationType: 'string',
      description: 'string',
      ownerId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.activeApiKeyPrefixes)) {
      $dara.Model.validateArray(this.activeApiKeyPrefixes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgenticAgentByInstallTokenResponseBody extends $dara.Model {
  data?: GetAgenticAgentByInstallTokenResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAgenticAgentByInstallTokenResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

