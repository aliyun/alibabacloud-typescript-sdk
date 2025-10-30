// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretAsrDetailResponseBodyDataSentences extends $dara.Model {
  /**
   * @remarks
   * The start time offset of the sentence. Unit: milliseconds.
   * 
   * @example
   * 1020
   */
  beginTime?: number;
  /**
   * @remarks
   * The ID of the audio track to which the sentence belongs.
   * 
   * @example
   * 0
   */
  channelId?: number;
  /**
   * @remarks
   * The emotion value. Value range: 1 to 10. The higher the value, the stronger the emotion.
   * 
   * @example
   * 5.7
   */
  emotionValue?: string;
  /**
   * @remarks
   * The end time offset of the sentence. Unit: milliseconds.
   * 
   * @example
   * 1770
   */
  endTime?: number;
  /**
   * @remarks
   * The silence duration between the current sentence and the previous sentence. Unit: seconds.
   * 
   * @example
   * 0
   */
  silenceDuration?: number;
  /**
   * @remarks
   * The average speech rate of the sentence. Unit: number of words per minute.
   * 
   * @example
   * 80
   */
  speechRate?: number;
  /**
   * @remarks
   * The recognition result of the sentence.
   * 
   * @example
   * Hello
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      endTime: 'EndTime',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'string',
      endTime: 'number',
      silenceDuration: 'number',
      speechRate: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total duration of the audio file that was recognized. Unit: milliseconds.
   * 
   * @example
   * 10944
   */
  bizDuration?: number;
  /**
   * @remarks
   * The ID of the business process.
   * 
   * @example
   * 435ee78c7a019650@!FC100000074672458@!2020061522****
   */
  businessId?: string;
  /**
   * @remarks
   * The business keyword.
   * 
   * @example
   * JCGTncltuNao****
   */
  businessKey?: string;
  /**
   * @remarks
   * The status code. The status code 21050000 indicates that the request was successful.
   * 
   * @example
   * 21050000
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8d2329d407a83447a83be441681f4872ac74nE
   */
  requestId?: string;
  /**
   * @remarks
   * The ASR result.
   */
  sentences?: GetSecretAsrDetailResponseBodyDataSentences[];
  /**
   * @remarks
   * The type.
   * 
   * @example
   * asrResult
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizDuration: 'BizDuration',
      businessId: 'BusinessId',
      businessKey: 'BusinessKey',
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      sentences: 'Sentences',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDuration: 'number',
      businessId: 'string',
      businessKey: 'string',
      code: 'string',
      msg: 'string',
      requestId: 'string',
      sentences: { 'type': 'array', 'itemType': GetSecretAsrDetailResponseBodyDataSentences },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ASR details.
   */
  data?: GetSecretAsrDetailResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSecretAsrDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

