// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobSanityCheckResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting order:
   * 
   * *   desc: descending order
   * *   asc: ascending order
   * 
   * @example
   * desc
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

