// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateScratchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 221DA822-B8CF-50DF-A9D2-BA197BF97BD5
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scenario.
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

