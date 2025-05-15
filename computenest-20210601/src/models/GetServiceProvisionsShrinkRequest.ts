// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceProvisionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters configured for the service instance.
   * 
   * @example
   * {\\"RegionId\\":\\"cn-hangzhou\\",\\"ZoneId\\":\\"cn-hangzhou-g\\",\\"EcsInstanceType\\":\\"ecs.g5.large\\",\\"InstancePassword\\":\\"xxxxxxxx\\",\\"PayType\\":\\"PostPaid\\",\\"PayPeriodUnit\\":\\"Month\\",\\"PayPeriod\\":1}
   */
  parametersShrink?: string;
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
   * service-0efc0db451794bxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The version of the service.
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
   * ECS
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
   * Trial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
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
      parametersShrink: 'string',
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

