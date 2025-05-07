// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWhitelistTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status code returned. Valid values:
   * 
   * *   **ok**: The request is successful.
   * *   **error**: The request fails.
   * 
   * @example
   * ok
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

