// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPushAllTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The check items. Separate multiple check items with commas (,). Valid values:
   * 
   * *   **OVAL_ENTITY**: Common Vulnerabilities and Exposures (CVE) vulnerabilities.
   * *   **CMS**: Web-CMS vulnerabilities.
   * *   **SYSVUL**: Windows system vulnerabilities.
   * *   **SCA**: application vulnerabilities.
   * *   **HEALTH_CHECK**: baselines.
   * *   **WEBSHELL**: webshells.
   * *   **PROC_SNAPSHOT**: processes.
   * *   **PORT_SNAPSHOT**: ports.
   * *   **ACCOUNT_SNAPSHOT**: accounts.
   * *   **SOFTWARE_SNAPSHOT**: software assets.
   * *   **SCA_SNAPSHOT**: middleware, databases, and web services.
   * *   **CROND_SNAPSHOT**: scheduled tasks.
   * *   **AUTORUN_SNAPSHOT**: startup items.
   * *   **LKM_SNAPSHOT**: kernel modules.
   * *   **SCA_PROXY_SNAPSHOT**: websites.
   * 
   * This parameter is required.
   * 
   * @example
   * HEALTH_CHECK,OVAL_ENTITY
   */
  tasks?: string;
  /**
   * @remarks
   * The UUIDs of servers on which you want to perform security check tasks. Separate multiple UUIDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * inet-923b4538-0e88-409d-80ba-cb2e7487****,dc1691eb-656f-472f-b2aa-04f621f4****,70452f92-9fc1-45c5-ab35-e7bf8552****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      tasks: 'Tasks',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      tasks: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

