// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEstimateCostShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * mRdxWuW2ts
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration information about the purchase order of Alibaba Cloud Marketplace.
   */
  commodityShrink?: string;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {\\"PayType\\":\\"PostPaid\\",\\"InstancePassword\\":\\"xxxxxxxxxx\\",\\"EcsInstanceType\\":\\"ecs.g6.large\\",\\"VSwitchId\\":\\"vsw-0jlueyydpuekoxxxxxxxx\\",\\"VpcId\\":\\"vpc-0jlps6mjbgvpqxxxxxxxx\\",\\"ZoneId\\":\\"cn-wulanchabu-a\\",\\"Enable\\":false,\\"RegionId\\":\\"cn-wulanchabu\\"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-16fbd358d75e49xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
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
   * The package name.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Custom_Image_Ecs
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityShrink: 'Commodity',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityShrink: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
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

