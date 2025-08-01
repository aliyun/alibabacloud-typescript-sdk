// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthDiagnosisRequestInstances extends $dara.Model {
  instance?: string;
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
  autoCreateRole?: boolean;
  autoInstallAgent?: boolean;
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

