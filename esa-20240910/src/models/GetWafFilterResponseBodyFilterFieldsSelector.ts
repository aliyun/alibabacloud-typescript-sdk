// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWafFilterResponseBodyFilterFieldsSelectorData } from "./GetWafFilterResponseBodyFilterFieldsSelectorData";


export class GetWafFilterResponseBodyFilterFieldsSelector extends $dara.Model {
  /**
   * @remarks
   * The data. This parameter is available only when the value of the Kind parameter is data.
   */
  data?: GetWafFilterResponseBodyFilterFieldsSelectorData[];
  /**
   * @remarks
   * The type of selector. Valid values: data and others.
   * 
   * @example
   * data
   */
  kind?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      kind: 'Kind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFieldsSelectorData },
      kind: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

