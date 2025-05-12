// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddWaterMarkTemplateResponseBodyWaterMarkTemplate } from "./AddWaterMarkTemplateResponseBodyWaterMarkTemplate";


export class AddWaterMarkTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54BB917F-DD35-4F32-BABA-E60E31B21W63
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the watermark template.
   */
  waterMarkTemplate?: AddWaterMarkTemplateResponseBodyWaterMarkTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waterMarkTemplate: AddWaterMarkTemplateResponseBodyWaterMarkTemplate,
    };
  }

  validate() {
    if(this.waterMarkTemplate && typeof (this.waterMarkTemplate as any).validate === 'function') {
      (this.waterMarkTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

