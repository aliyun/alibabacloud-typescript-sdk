// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLLabelParam } from "./MllabelParam";


export class ListAnnotationLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: MLLabelParam[];
  /**
   * @remarks
   * The total number of tags that meet the query conditions.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': MLLabelParam },
      total: 'number',
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

