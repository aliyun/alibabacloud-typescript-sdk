// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateServicePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of operation N for which you want to generate the policy information.
   * 
   * Valid values:
   * 
   * *   CreateServiceInstance: creates a serviceInstance by calling the CreateServiceInstance operation.
   * *   UpdateServiceInstance: updates a serviceInstance by calling the UpdateServiceInstance operation.
   * *   DeleteServiceInstance: deletes a serviceInstance by calling the DeleteServiceInstance operation.
   * 
   * >  The default value is the combination of all valid values.
   */
  operationTypes?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
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
   * service-b3e9ed878b0c4xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * GPU-单机版
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      operationTypes: 'OperationTypes',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTypes)) {
      $dara.Model.validateArray(this.operationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

