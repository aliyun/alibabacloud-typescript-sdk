// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceTemplateParameterConstraintsRequestParameters } from "./GetServiceTemplateParameterConstraintsRequestParameters";


export class GetServiceTemplateParameterConstraintsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the private connection. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enablePrivateVpcConnection?: boolean;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   */
  parameters?: GetServiceTemplateParameterConstraintsRequestParameters[];
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
   * service-731f788406024axxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-461ee95f46ca46xxxxxx
   */
  serviceInstanceId?: string;
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
   * The name of the specification package.
   * 
   * @example
   * 套餐一
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * 模板1
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
      clientToken: 'ClientToken',
      deployRegionId: 'DeployRegionId',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deployRegionId: 'string',
      enablePrivateVpcConnection: 'boolean',
      parameters: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsRequestParameters },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

