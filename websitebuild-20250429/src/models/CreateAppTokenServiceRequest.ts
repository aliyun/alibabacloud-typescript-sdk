// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppTokenServiceRequest extends $dara.Model {
  /**
   * @example
   * OPEN_SUBSCRIPTION
   */
  createAction?: string;
  static names(): { [key: string]: string } {
    return {
      createAction: 'CreateAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

