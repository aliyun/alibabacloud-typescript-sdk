// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequestSortBy extends $dara.Model {
  /**
   * @example
   * time_start
   */
  label?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

