// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceDeployableRequest extends $dara.Model {
  /**
   * @remarks
   * The total pay-as-you-go amount.
   * 
   * @example
   * 1.29
   */
  postPaidAmount?: string;
  /**
   * @remarks
   * The total upfront payment amount.
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
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial type. Valid values:
   * 
   * - Trial: The service supports trial use.
   * 
   * - NotTrial: The service does not support trial use.
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
      templateName: 'TemplateName',
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
      templateName: 'string',
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

