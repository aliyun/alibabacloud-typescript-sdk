// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceStatusResponseBodyData extends $dara.Model {
  instance?: string;
  region?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

