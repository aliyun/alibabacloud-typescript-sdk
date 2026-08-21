// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthDiagnosisRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic creation of the service-linked role.
   */
  autoCreateRole?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically install the latest version of the agent if it is not installed.
   */
  autoInstallAgent?: boolean;
  /**
   * @remarks
   * The list of instances authorized for diagnosis.
   */
  instances?: AuthDiagnosisRequestInstances[];
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      autoCreateRole: 'autoCreateRole',
      autoInstallAgent: 'autoInstallAgent',
      instances: 'instances',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      autoCreateRole: 'boolean',
      autoInstallAgent: 'boolean',
      instances: { 'type': 'array', 'itemType': AuthDiagnosisRequestInstances },
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

