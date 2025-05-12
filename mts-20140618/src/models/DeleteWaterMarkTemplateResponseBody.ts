// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWaterMarkTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 030E2671-806A-52AF-A93C-DA8E308603A6
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the deleted watermark template.
   * 
   * @example
   * 3780bd69b2b74540bc7b1096f564****
   */
  waterMarkTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waterMarkTemplateId: 'WaterMarkTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waterMarkTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

