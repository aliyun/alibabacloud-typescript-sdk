// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAsrVocabResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of **200** indicates that the request was successful. Other values indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the hotword vocabulary. This is the value of the **vocabId** that you specified in the request.
   * 
   * @example
   * 71b1795ac8634bd8bdf4d3878480c7c2
   */
  data?: string;
  /**
   * @remarks
   * The message that is returned. If the request is successful, **successful** is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates success. A value of **false** or **null** indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

