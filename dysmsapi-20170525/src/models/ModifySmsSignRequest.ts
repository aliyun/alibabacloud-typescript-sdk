// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifySmsSignRequestSignFileList } from "./ModifySmsSignRequestSignFileList";


export class ModifySmsSignRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The scenario description of your released services. Provide the information of your services, such as a website URL, a domain name with an ICP filing, an app download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * 
   * > The description can be up to 200 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * This is the abbreviation of our company.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of signature files.
   * 
   * This parameter is required.
   */
  signFileList?: ModifySmsSignRequestSignFileList[];
  /**
   * @remarks
   * The signature.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The source of the signature. Valid values:
   * 
   * *   **0**: full name or abbreviation of an enterprise or institution.
   * *   **1**: full name or abbreviation of a website with Ministry of Industry and Information Technology (MIIT) filing.
   * *   **2**: full name or abbreviation of an app.
   * *   **3**: full name or abbreviation of a WeChat official account or applet.
   * *   **4**: full name or abbreviation of an e-commerce store.
   * *   **5**: full name or abbreviation of a trademark.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * The type of the signature. Valid values:
   * 
   * *   **0**: verification-code signature
   * *   **1**: general-purpose signature
   * 
   * @example
   * 1
   */
  signType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signFileList: 'SignFileList',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signFileList: { 'type': 'array', 'itemType': ModifySmsSignRequestSignFileList },
      signName: 'string',
      signSource: 'number',
      signType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.signFileList)) {
      $dara.Model.validateArray(this.signFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

