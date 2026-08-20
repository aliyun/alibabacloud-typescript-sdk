// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateServicePolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The operation types for which policy information needs to be generated.
   */
  operationTypes?: string[];
  /**
   * @remarks
   * The parameters required to check the deployment permissions of the service instance.
   * 
   * @example
   * {\\"EnablePublicIp\\":null,\\"DeploymentMode\\":\\"ExistingECS\\",\\"ExistingInstanceId\\":\\"i-bp1cg4t5o9kol5tdiw1q\\",\\"RegionId\\":\\"cn-hangzhou\\",\\"InternetChargeType\\":\\"PayByTraffic\\"}
   */
  parametersShrink?: string;
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
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial type. Default value: NotTrial. Valid values:
   * 
   * - Trial: Trial is supported.
   * 
   * - NotTrial: Trial is not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      operationTypes: 'OperationTypes',
      parametersShrink: 'Parameters',
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
      parametersShrink: 'string',
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

