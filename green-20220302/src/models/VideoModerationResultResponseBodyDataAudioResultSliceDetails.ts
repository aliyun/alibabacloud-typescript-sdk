// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataAudioResultSliceDetails extends $dara.Model {
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
   * The end time of the text after voice-to-text conversion. Unit: seconds.
   * 
   * @example
   * 30
   */
  endTime?: number;
  /**
   * @remarks
   * The end timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1685245261939
   */
  endTimestamp?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * {\\"consoleProduct\\":\\"slbnext\\"}
   */
  extend?: string;
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
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Subcategory labels. Multiple labels are separated by commas (,).
   * 
   * @example
   * ""
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   * 
   * @example
   * ""
   */
  riskWords?: string;
  /**
   * @remarks
   * The risk score. Default range: 0 to 99.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The start time of the text after voice-to-text conversion. Unit: seconds.
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
   * 1659935002123
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The text converted from voice.
   * 
   * @example
   * Disgusting
   */
  text?: string;
  /**
   * @remarks
   * If the moderation object is a voice stream, this parameter indicates the temporary access URL of the voice stream to which the text entry corresponds. The validity period of the URL is 30 minutes. You must prepare another URL to store the voice stream at the earliest opportunity.
   * 
   * @example
   * http://xxxx.abc.img
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      descriptions: 'Descriptions',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      extend: 'Extend',
      labels: 'Labels',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

