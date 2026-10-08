// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckProcessingServerLockApplyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the domain name has a registry lock service request with the **Processing** status at the domain name registry. Valid values:
   * 
   * - true: exists
   * - false: does not exist
   * 
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exists: 'Exists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exists: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

