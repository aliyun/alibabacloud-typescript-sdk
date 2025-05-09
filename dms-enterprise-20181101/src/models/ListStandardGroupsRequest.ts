// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStandardGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

