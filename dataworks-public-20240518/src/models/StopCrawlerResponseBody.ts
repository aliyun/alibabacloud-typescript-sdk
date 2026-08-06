// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCrawlerResponseBody extends $dara.Model {
  /**
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  stopAccepted?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      stopAccepted: 'StopAccepted',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
      stopAccepted: 'boolean',
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

