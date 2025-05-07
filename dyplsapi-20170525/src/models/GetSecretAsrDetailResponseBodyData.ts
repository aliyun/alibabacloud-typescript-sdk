// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSecretAsrDetailResponseBodyDataSentences } from "./GetSecretAsrDetailResponseBodyDataSentences";


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

