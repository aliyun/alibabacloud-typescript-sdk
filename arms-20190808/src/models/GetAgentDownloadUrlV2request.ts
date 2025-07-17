// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentDownloadUrlV2Request extends $dara.Model {
  /**
   * @remarks
   * The agent type.\\
   * **Valid values:**
   * 
   * *   **JavaAgent**
   * *   **Instgo**
   * 
   * This parameter is required.
   * 
   * @example
   * JavaAgent
   */
  agentType?: string;
  /**
   * @remarks
   * The architecture type of the environment where the agent is installed.\\
   * This parameter is required and valid only when **AgentType** is set to **Instgo**.\\
   * **Valid values:**
   * 
   * *   **amd64**
   * *   **arm64**
   * 
   * @example
   * amd64
   */
  archType?: string;
  /**
   * @remarks
   * The operating system of the environment where the agent is installed.\\
   * This parameter is required and valid only when **AgentType** is set to **Instgo**.\\
   * **Valid values:**
   * 
   * *   **linux**
   * *   **darwin**
   * *   **windows**
   * 
   * @example
   * linux
   */
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      archType: 'ArchType',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      archType: 'string',
      osType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

