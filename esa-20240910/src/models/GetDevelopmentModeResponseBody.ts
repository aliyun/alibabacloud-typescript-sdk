// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDevelopmentModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Switch. Values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
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

