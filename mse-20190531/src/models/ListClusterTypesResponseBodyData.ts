// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterTypesResponseBodyData extends $dara.Model {
  code?: string;
  /**
   * @remarks
   * The type of the MSE engine that can be activated.
   * 
   * @example
   * Zookeeper
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

