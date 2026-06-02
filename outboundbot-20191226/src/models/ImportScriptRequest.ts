// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportScriptRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  nluEngine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nluEngine: 'NluEngine',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nluEngine: 'string',
      signatureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

