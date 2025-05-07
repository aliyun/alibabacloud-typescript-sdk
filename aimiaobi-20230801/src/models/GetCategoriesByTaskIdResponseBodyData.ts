// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCategoriesByTaskIdResponseBodyDataChildren } from "./GetCategoriesByTaskIdResponseBodyDataChildren";


export class GetCategoriesByTaskIdResponseBodyData extends $dara.Model {
  category?: string;
  children?: GetCategoriesByTaskIdResponseBodyDataChildren[];
  /**
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      children: 'Children',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      children: { 'type': 'array', 'itemType': GetCategoriesByTaskIdResponseBodyDataChildren },
      count: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

