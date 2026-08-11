// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsRequest extends $dara.Model {
  capabilities?: string[];
  /**
   * @example
   * 10
   */
  contextWindow?: number;
  features?: string[];
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  providers?: string[];
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      contextWindow: 'contextWindow',
      features: 'features',
      language: 'language',
      maxResults: 'maxResults',
      model: 'model',
      name: 'name',
      nextToken: 'nextToken',
      providers: 'providers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'array', 'itemType': 'string' },
      contextWindow: 'number',
      features: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      maxResults: 'number',
      model: 'string',
      name: 'string',
      nextToken: 'string',
      providers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    if(Array.isArray(this.providers)) {
      $dara.Model.validateArray(this.providers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

