// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DowngradeApplicationApmServiceResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

