// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistillationTemplate } from "./DistillationTemplate";


export class GetDistillationTemplateResponseBody extends $dara.Model {
  distillationTemplate?: DistillationTemplate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      distillationTemplate: 'DistillationTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distillationTemplate: DistillationTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.distillationTemplate && typeof (this.distillationTemplate as any).validate === 'function') {
      (this.distillationTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

