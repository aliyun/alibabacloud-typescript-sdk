// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomTemplatesResponseBodyCustomTemplateList } from "./ListCustomTemplatesResponseBodyCustomTemplateList";


export class ListCustomTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried templates.
   */
  customTemplateList?: ListCustomTemplatesResponseBodyCustomTemplateList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      customTemplateList: 'CustomTemplateList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplateList: { 'type': 'array', 'itemType': ListCustomTemplatesResponseBodyCustomTemplateList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customTemplateList)) {
      $dara.Model.validateArray(this.customTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

