// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimilarEventScenariosRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert event.
   * > You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 12321
   */
  securityEventId?: number;
  static names(): { [key: string]: string } {
    return {
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

