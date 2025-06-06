// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceComponentStep extends $dara.Model {
  /**
   * @example
   * fc3 invoke
   */
  component?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

