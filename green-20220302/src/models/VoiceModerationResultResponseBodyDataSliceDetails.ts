// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationResultResponseBodyDataSliceDetails extends $dara.Model {
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
   * The end time of the audio segment in seconds.
   * 
   * @example
   * 10
   */
  endTime?: number;
  /**
   * @remarks
   * The end timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1678854649720
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Extended fields.
   * 
   * @example
   * {\\"riskTips\\":\\"sexuality_Suggestive\\",\\"riskWords\\":\\"pxxxxy\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * sexual_sounds
   */
  labels?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * {}
   */
  originAlgoResult?: { [key: string]: any };
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The details of the risky content.
   * 
   * @example
   * sexuality_Suggestive
   */
  riskTips?: string;
  /**
   * @remarks
   * The term hit by the risky content.
   * 
   * @example
   * AAA,BBB,CCC
   */
  riskWords?: string;
  /**
   * @remarks
   * The risk score. Default range: 0 to 99.
   * 
   * @example
   * 87.01
   */
  score?: number;
  /**
   * @remarks
   * The start time of the audio segment in seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The start timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1678854649720
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The text converted from the audio segment.
   * 
   * @example
   * Disgusting
   */
  text?: string;
  /**
   * @remarks
   * The temporary URL of the audio segment.
   * 
   * @example
   * https://aliyundoc.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      descriptions: 'Descriptions',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      extend: 'Extend',
      labels: 'Labels',
      originAlgoResult: 'OriginAlgoResult',
      riskLevel: 'RiskLevel',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      score: 'Score',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descriptions: 'string',
      endTime: 'number',
      endTimestamp: 'number',
      extend: 'string',
      labels: 'string',
      originAlgoResult: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      riskLevel: 'string',
      riskTips: 'string',
      riskWords: 'string',
      score: 'number',
      startTime: 'number',
      startTimestamp: 'number',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.originAlgoResult) {
      $dara.Model.validateMap(this.originAlgoResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

