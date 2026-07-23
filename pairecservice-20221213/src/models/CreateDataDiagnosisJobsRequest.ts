// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataDiagnosisJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The data diagnosis ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  dataDiagnosisId?: string;
  /**
   * @remarks
   * The end date for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-02-01
   */
  endDate?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The start date for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiagnosisId: 'DataDiagnosisId',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiagnosisId: 'string',
      endDate: 'string',
      instanceId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

