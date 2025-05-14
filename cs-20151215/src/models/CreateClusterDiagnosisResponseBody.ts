// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The diagnostic ID.
   * 
   * @example
   * 6f719f23098240818eb26fe3a37d****
   */
  diagnosisId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 687C5BAA-D103-4993-884B-C35E4314****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      diagnosisId: 'diagnosis_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      diagnosisId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

