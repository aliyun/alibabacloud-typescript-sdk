// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The language. The information is returned in the specified language. Valid values:
   * 
   * *   en: English
   * *   zh: Chinese
   * 
   * @example
   * zh
   */
  language?: string;
  lensCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ResourceUtilization
   */
  topicCode?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      lensCode: 'LensCode',
      regionId: 'RegionId',
      topicCode: 'TopicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      lensCode: 'string',
      regionId: 'string',
      topicCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

