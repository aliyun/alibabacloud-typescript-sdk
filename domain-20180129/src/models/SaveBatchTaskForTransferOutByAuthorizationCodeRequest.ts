// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForTransferOutByAuthorizationCodeRequestTransferOutParamList extends $dara.Model {
  /**
   * @example
   * Test2o#Lck
   */
  authorizationCode?: string;
  /**
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
   * This parameter is required.
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

