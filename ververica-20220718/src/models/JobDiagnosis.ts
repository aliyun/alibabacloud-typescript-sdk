// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobDiagnosisSymptoms } from "./JobDiagnosisSymptoms";


export class JobDiagnosis extends $dara.Model {
  /**
   * @remarks
   * The diagnostic ID.
   * 
   * @example
   * ba30cd99-37a5-4a20-8cd9-ed4b*****
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The diagnostic time.
   * 
   * @example
   * 1740389560871
   */
  diagnoseTime?: number;
  healthScore?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default-namespace-*****
   */
  namespace?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * RISK_LEVEL_LOW
   */
  riskLevel?: string;
  /**
   * @remarks
   * The diagnostic details.
   */
  symptoms?: JobDiagnosisSymptoms;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseId: 'diagnoseId',
      diagnoseTime: 'diagnoseTime',
      healthScore: 'healthScore',
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
      healthScore: 'number',
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

