// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthDiagnosisRequestInstances extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * Region ID.
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
  /**
   * @remarks
   * Automatic creation of role
   */
  autoCreateRole?: boolean;
  /**
   * @remarks
   * Automatic installation of agent
   */
  autoInstallAgent?: boolean;
  /**
   * @remarks
   * List of instances to authorize for diagnosis
   */
  instances?: AuthDiagnosisRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      autoCreateRole: 'autoCreateRole',
      autoInstallAgent: 'autoInstallAgent',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRole: 'boolean',
      autoInstallAgent: 'boolean',
      instances: { 'type': 'array', 'itemType': AuthDiagnosisRequestInstances },
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

