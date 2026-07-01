// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobDiagnosisSymptom } from "./JobDiagnosisSymptom";


export class JobDiagnosisSymptoms extends $dara.Model {
  /**
   * @remarks
   * Job resource diagnosis.
   */
  autopilot?: JobDiagnosisSymptom;
  /**
   * @remarks
   * Other namespace diagnosis.
   */
  others?: JobDiagnosisSymptom[];
  /**
   * @remarks
   * Run diagnosis.
   */
  runtime?: JobDiagnosisSymptom[];
  /**
   * @remarks
   * Startup procedure diagnosis.
   */
  startup?: JobDiagnosisSymptom[];
  /**
   * @remarks
   * Job status diagnosis.
   */
  state?: JobDiagnosisSymptom[];
  /**
   * @remarks
   * Underlying abnormal diagnosis.
   */
  troubleshooting?: JobDiagnosisSymptom[];
  static names(): { [key: string]: string } {
    return {
      autopilot: 'autopilot',
      others: 'others',
      runtime: 'runtime',
      startup: 'startup',
      state: 'state',
      troubleshooting: 'troubleshooting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autopilot: JobDiagnosisSymptom,
      others: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
      runtime: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
      startup: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
      state: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
      troubleshooting: { 'type': 'array', 'itemType': JobDiagnosisSymptom },
    };
  }

  validate() {
    if(this.autopilot && typeof (this.autopilot as any).validate === 'function') {
      (this.autopilot as any).validate();
    }
    if(Array.isArray(this.others)) {
      $dara.Model.validateArray(this.others);
    }
    if(Array.isArray(this.runtime)) {
      $dara.Model.validateArray(this.runtime);
    }
    if(Array.isArray(this.startup)) {
      $dara.Model.validateArray(this.startup);
    }
    if(Array.isArray(this.state)) {
      $dara.Model.validateArray(this.state);
    }
    if(Array.isArray(this.troubleshooting)) {
      $dara.Model.validateArray(this.troubleshooting);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

