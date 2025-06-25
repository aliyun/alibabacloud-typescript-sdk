// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstancesResponseBodyAppInstanceModelsBindInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the end user that is bound to the application instance.
   * 
   * @example
   * app.test
   */
  endUserId?: string;
  /**
   * @remarks
   * The use duration of the application instance. Unit: seconds.
   * 
   * @example
   * 2000
   */
  usageDuration?: number;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      usageDuration: 'UsageDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      usageDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

