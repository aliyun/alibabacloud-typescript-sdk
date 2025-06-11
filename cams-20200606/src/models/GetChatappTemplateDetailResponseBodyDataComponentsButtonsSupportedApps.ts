// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappTemplateDetailResponseBodyDataComponentsButtonsSupportedApps extends $dara.Model {
  /**
   * @remarks
   * The app package name.
   * 
   * @example
   * com.test
   */
  packageName?: string;
  /**
   * @remarks
   * The app signing key hash.
   * 
   * @example
   * 29kdkeik939
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

