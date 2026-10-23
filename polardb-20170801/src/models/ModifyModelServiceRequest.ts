// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyModelServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The API key of the model service.
   * 
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The upstream service URL.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The gateway cluster ID. You can obtain this ID from the GwClusterId parameter returned by the CreateGateway operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The number of input points.
   * 
   * @example
   * 10
   */
  inputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The model category.
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The model service ID. You can obtain this ID from the ModelServiceId parameter returned by the CreateModelService operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * The model service name.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The number of output points.
   * 
   * @example
   * 10
   */
  outputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * * **openai**
   * * **anthropic**
   * * **bailian**
   * * **vllm**
   * 
   * This parameter is required.
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 10
   */
  requestCostPoints?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      baseUrl: 'BaseUrl',
      gwClusterId: 'GwClusterId',
      inputCostPointsPerMillion: 'InputCostPointsPerMillion',
      modelCategory: 'ModelCategory',
      modelServiceId: 'ModelServiceId',
      name: 'Name',
      outputCostPointsPerMillion: 'OutputCostPointsPerMillion',
      protocol: 'Protocol',
      regionId: 'RegionId',
      requestCostPoints: 'RequestCostPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      baseUrl: 'string',
      gwClusterId: 'string',
      inputCostPointsPerMillion: 'string',
      modelCategory: 'string',
      modelServiceId: 'string',
      name: 'string',
      outputCostPointsPerMillion: 'string',
      protocol: 'string',
      regionId: 'string',
      requestCostPoints: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

