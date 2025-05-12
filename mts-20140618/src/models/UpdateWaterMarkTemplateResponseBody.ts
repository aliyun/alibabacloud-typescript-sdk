// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWaterMarkTemplateResponseBodyWaterMarkTemplate } from "./UpdateWaterMarkTemplateResponseBodyWaterMarkTemplate";


export class UpdateWaterMarkTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E558894E-40D9-57C6-B5CC-0F5CDF23614E
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the watermark template.
   */
  waterMarkTemplate?: UpdateWaterMarkTemplateResponseBodyWaterMarkTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waterMarkTemplate: 'WaterMarkTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waterMarkTemplate: UpdateWaterMarkTemplateResponseBodyWaterMarkTemplate,
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

