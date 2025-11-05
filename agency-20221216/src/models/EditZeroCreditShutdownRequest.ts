// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditZeroCreditShutdownRequest extends $dara.Model {
  /**
   * @remarks
   * UID
   * 
   * @example
   * Shutdown Policy</br>
   * 
   * - immediatelyStop, The instances of the specified End User\\"s account will be shutdown immediately once EU triggered the Shutdown Policy.</br>
   * 
   * - delayStop, The instances of the specified End User\\"s account will be shutdown later, even EU have triggered the Shutdown Policy.</br>
   * 
   * - noStop, The instances of the specified End User\\"s account will not be shutdown, after EU have triggered the Shutdown Policy.</br>
   */
  shutdownPolicy?: string;
  /**
   * @remarks
   * No Change History
   * 
   * @example
   * 1263644979775567
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      shutdownPolicy: 'ShutdownPolicy',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shutdownPolicy: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

