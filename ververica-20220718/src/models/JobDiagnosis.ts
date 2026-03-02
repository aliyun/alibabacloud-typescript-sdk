// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobDiagnosisSymptoms } from "./JobDiagnosisSymptoms";


export class JobDiagnosis extends $dara.Model {
  /**
   * @remarks
   * The diagnostic task ID.
   * 
   * @example
   * ba30cd99-37a5-4a20-8cd9-ed4b*****
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The time when the deployment is diagnosed.
   * 
   * @example
   * 1740389560871
   */
  diagnoseTime?: number;
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
   * The severity level of the risk.
   * 
   * Valid values:
   * 
   * *   RISK_LEVEL_HIGH
   * *   RISK_LEVEL_MID
   * *   RISK_LEVEL_LOW
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
   * The workspace to which the deployment belongs.
   * 
   * @example
   * a14bd5d90a****
   */
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

