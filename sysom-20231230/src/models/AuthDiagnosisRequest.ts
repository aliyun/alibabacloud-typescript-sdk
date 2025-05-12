// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthDiagnosisRequestInstances } from "./AuthDiagnosisRequestInstances";


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

