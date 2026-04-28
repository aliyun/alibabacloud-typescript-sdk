// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyModelServiceRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @example
   * 10
   */
  inputCostPointsPerMillion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @example
   * 10
   */
  outputCostPointsPerMillion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * openai
   */
  protocol?: string;
  regionId?: string;
  /**
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

