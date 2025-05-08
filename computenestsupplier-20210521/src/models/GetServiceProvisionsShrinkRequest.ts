// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceProvisionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {\\"RegionId\\":\\"cn-hangzhou\\"}
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
   * service-20b8a396048346xxxxxx
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
   * 模板1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersShrink: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

