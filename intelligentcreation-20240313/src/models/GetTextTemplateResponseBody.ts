// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextTemplateResponseBodyAvailableIndustry } from "./GetTextTemplateResponseBodyAvailableIndustry";


export class GetTextTemplateResponseBody extends $dara.Model {
  availableIndustry?: GetTextTemplateResponseBodyAvailableIndustry;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIndustry: 'availableIndustry',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIndustry: GetTextTemplateResponseBodyAvailableIndustry,
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableIndustry && typeof (this.availableIndustry as any).validate === 'function') {
      (this.availableIndustry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

