// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateScratchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 84980977-22F0-5421-B30D-B201311D5DCF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

