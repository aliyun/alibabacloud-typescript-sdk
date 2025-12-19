// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAPIKeyCredentialProviderResponseBody extends $dara.Model {
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

