// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAnswerLibResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * The ID assigned by the backend that uniquely identifies the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

