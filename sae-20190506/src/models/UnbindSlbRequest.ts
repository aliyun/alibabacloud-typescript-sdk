// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to unbind the public network SLB. Valid values:
   * 
   * - **true**: unbinds the public network SLB.
   * 
   * - **false**: does not unbind the public network SLB.
   * 
   * @example
   * true
   */
  internet?: boolean;
  /**
   * @remarks
   * Specifies whether to unbind the private network SLB. Valid values:
   * 
   * - **true**: unbinds the private network SLB.
   * 
   * - **false**: does not unbind the private network SLB.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      internet: 'Internet',
      intranet: 'Intranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      internet: 'boolean',
      intranet: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

