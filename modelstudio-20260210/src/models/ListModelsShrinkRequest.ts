// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsShrinkRequest extends $dara.Model {
  capabilitiesShrink?: string;
  /**
   * @example
   * 10
   */
  contextWindow?: number;
  featuresShrink?: string;
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
  providersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      capabilitiesShrink: 'capabilities',
      contextWindow: 'contextWindow',
      featuresShrink: 'features',
      language: 'language',
      maxResults: 'maxResults',
      model: 'model',
      name: 'name',
      nextToken: 'nextToken',
      providersShrink: 'providers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilitiesShrink: 'string',
      contextWindow: 'number',
      featuresShrink: 'string',
      language: 'string',
      maxResults: 'number',
      model: 'string',
      name: 'string',
      nextToken: 'string',
      providersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

