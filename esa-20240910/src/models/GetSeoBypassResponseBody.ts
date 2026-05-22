// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSeoBypassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the feature. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
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

