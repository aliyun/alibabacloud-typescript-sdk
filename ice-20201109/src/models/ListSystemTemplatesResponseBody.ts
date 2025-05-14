// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSystemTemplatesResponseBodySystemTemplateList } from "./ListSystemTemplatesResponseBodySystemTemplateList";


export class ListSystemTemplatesResponseBody extends $dara.Model {
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
   * The queried templates.
   */
  systemTemplateList?: ListSystemTemplatesResponseBodySystemTemplateList[];
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
      requestId: 'RequestId',
      systemTemplateList: 'SystemTemplateList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemTemplateList: { 'type': 'array', 'itemType': ListSystemTemplatesResponseBodySystemTemplateList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.systemTemplateList)) {
      $dara.Model.validateArray(this.systemTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

