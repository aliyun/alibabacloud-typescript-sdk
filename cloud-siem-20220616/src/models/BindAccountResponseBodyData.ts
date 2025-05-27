// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the cloud accounts that are added to the threat analysis feature.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

