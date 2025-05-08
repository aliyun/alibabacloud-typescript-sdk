// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterConnectionTypesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The connection type.
   * 
   * @example
   * slb
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

