// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  filterName?: string;
  static names(): { [key: string]: string } {
    return {
      filterName: 'FilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

