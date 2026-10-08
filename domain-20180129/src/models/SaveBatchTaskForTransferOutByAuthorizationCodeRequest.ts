// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForTransferOutByAuthorizationCodeRequestTransferOutParamList extends $dara.Model {
  /**
   * @remarks
   * The authorization code for the domain name.
   * 
   * @example
   * Test2o#Lck
   */
  authorizationCode?: string;
  /**
   * @remarks
   * The domain name to transfer out.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBatchTaskForTransferOutByAuthorizationCodeRequest extends $dara.Model {
  /**
   * @remarks
   * A list of domain names to transfer out, each with its authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * SaveBatchTaskForTransferOutByAuthorizationCode
   */
  transferOutParamList?: SaveBatchTaskForTransferOutByAuthorizationCodeRequestTransferOutParamList[];
  static names(): { [key: string]: string } {
    return {
      transferOutParamList: 'TransferOutParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferOutParamList: { 'type': 'array', 'itemType': SaveBatchTaskForTransferOutByAuthorizationCodeRequestTransferOutParamList },
    };
  }

  validate() {
    if(Array.isArray(this.transferOutParamList)) {
      $dara.Model.validateArray(this.transferOutParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

