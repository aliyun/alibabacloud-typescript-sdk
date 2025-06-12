// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileModerationResultResponseBodyDataPageResultTextResult extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a title.
   */
  description?: string;
  /**
   * @remarks
   * The description of the labels.
   * 
   * @example
   * no risk
   */
  descriptions?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk details that are hit.
   * 
   * @example
   * xxx
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk words that are hit.
   * 
   * @example
   * xxx
   */
  riskWords?: string;
  /**
   * @remarks
   * The moderation service.
   * 
   * @example
   * chat_detection
   */
  service?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * This is a text.
   */
  text?: string;
  /**
   * @remarks
   * The text segmentation information.
   * 
   * @example
   * [0,999]
   */
  textSegment?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      descriptions: 'Descriptions',
      labels: 'Labels',
      riskLevel: 'RiskLevel',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      service: 'Service',
      text: 'Text',
      textSegment: 'TextSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      descriptions: 'string',
      labels: 'string',
      riskLevel: 'string',
      riskTips: 'string',
      riskWords: 'string',
      service: 'string',
      text: 'string',
      textSegment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

