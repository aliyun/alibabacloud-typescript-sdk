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
   * Specifies whether to disassociate the Internet-facing SLB instance. Valid values:
   * 
   * *   **true**: dissociates the Internet-facing SLB instance.
   * *   **false**: does not dissociate the Internet-facing SLB instance.
   * 
   * @example
   * true
   */
  internet?: boolean;
  /**
   * @remarks
   * Specifies whether to disassociate the internal-facing SLB instance. Valid values:
   * 
   * *   **true**: dissociates the internal-facing SLB instance.
   * *   **false**: does not dissociate the internal-facing SLB instance.
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

