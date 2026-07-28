// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProviderDocumentResponseBody extends $dara.Model {
  document?: string;
  providerVersion?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  terraformResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      providerVersion: 'providerVersion',
      requestId: 'requestId',
      terraformResourceType: 'terraformResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      providerVersion: 'string',
      requestId: 'string',
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

