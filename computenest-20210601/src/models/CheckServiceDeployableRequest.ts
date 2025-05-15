// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceDeployableRequest extends $dara.Model {
  /**
   * @remarks
   * Total amount of postpaid.
   * 
   * @example
   * 1.29
   */
  postPaidAmount?: string;
  /**
   * @remarks
   * Total amount of prepayment.
   * 
   * @example
   * 0.0
   */
  prePaidAmount?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The trial type of the service instance. Valid values:
   * 
   * *   **Trial**: Trials are supported.
   * *   **NotTrial**: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      postPaidAmount: 'PostPaidAmount',
      prePaidAmount: 'PrePaidAmount',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postPaidAmount: 'string',
      prePaidAmount: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      trialType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

