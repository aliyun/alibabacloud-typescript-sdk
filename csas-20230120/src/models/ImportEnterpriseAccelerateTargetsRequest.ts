// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportEnterpriseAccelerateTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eap-6457339b546c4cfb
   */
  eapId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://filename.xlsx
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      eapId: 'EapId',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eapId: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

