// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyChatappTemplateRequestComponentsButtonsSupportedApps extends $dara.Model {
  /**
   * @remarks
   * The Whatsapp template is required when the Category is\\" Authorisation \\"and the Button Type is\\" ONE_TAP/ZERO-TAP\\", indicating the signature hash value of the Whatsapp call application.
   * 
   * @example
   * com.example.myapplication
   */
  packageName?: string;
  /**
   * @remarks
   * The Whatsapp template is required when the Category is\\" Authorisation \\"and the Button Type is\\" ONE_TAP/ZERO-TAP\\", indicating the signature hash value of the Whatsapp call application.
   * 
   * @example
   * fk39kd93ks9
   */
  signatureHash?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      signatureHash: 'SignatureHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      signatureHash: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

