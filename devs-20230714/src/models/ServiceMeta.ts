// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceMeta extends $dara.Model {
  /**
   * @example
   * my-service
   */
  name?: string;
  /**
   * @example
   * fc3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

