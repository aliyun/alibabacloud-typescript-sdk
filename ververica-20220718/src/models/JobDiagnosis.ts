// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobDiagnosisSymptoms } from "./JobDiagnosisSymptoms";


export class JobDiagnosis extends $dara.Model {
  diagnoseId?: string;
  diagnoseTime?: number;
  namespace?: string;
  riskLevel?: string;
  symptoms?: JobDiagnosisSymptoms;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseId: 'diagnoseId',
      diagnoseTime: 'diagnoseTime',
      namespace: 'namespace',
      riskLevel: 'riskLevel',
      symptoms: 'symptoms',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseId: 'string',
      diagnoseTime: 'number',
      namespace: 'string',
      riskLevel: 'string',
      symptoms: JobDiagnosisSymptoms,
      workspace: 'string',
    };
  }

  validate() {
    if(this.symptoms && typeof (this.symptoms as any).validate === 'function') {
      (this.symptoms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

