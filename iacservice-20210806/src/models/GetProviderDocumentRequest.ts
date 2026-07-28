// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProviderDocumentRequest extends $dara.Model {
  providerVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  terraformResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      providerVersion: 'providerVersion',
      terraformResourceType: 'terraformResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerVersion: 'string',
      terraformResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

