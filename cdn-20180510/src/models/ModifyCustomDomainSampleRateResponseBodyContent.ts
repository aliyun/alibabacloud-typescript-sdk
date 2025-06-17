// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCustomDomainSampleRateResponseBodyContentContent } from "./ModifyCustomDomainSampleRateResponseBodyContentContent";


export class ModifyCustomDomainSampleRateResponseBodyContent extends $dara.Model {
  content?: ModifyCustomDomainSampleRateResponseBodyContentContent[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ModifyCustomDomainSampleRateResponseBodyContentContent },
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

