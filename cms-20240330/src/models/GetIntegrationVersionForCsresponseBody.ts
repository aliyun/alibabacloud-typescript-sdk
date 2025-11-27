// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntegrationVersionForCSResponseBody extends $dara.Model {
  /**
   * @example
   * V1
   */
  integrationVersion?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD9BCF34-EA09-5643-BC11-AF41C8DFAE5A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      integrationVersion: 'integrationVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integrationVersion: 'string',
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

