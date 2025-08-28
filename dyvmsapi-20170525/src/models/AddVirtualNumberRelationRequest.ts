// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVirtualNumberRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The company names. Separate multiple company names with commas (,).
   * 
   * @example
   * Company 1
   */
  corpNameList?: string;
  /**
   * @remarks
   * The real numbers. Separate multiple real numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1321111****,1322222****
   */
  numberList?: string;
  ownerId?: number;
  /**
   * @remarks
   * The virtual number.
   * 
   * This parameter is required.
   * 
   * @example
   * 05516214****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The service name. Default value: **dyvms**.
   * 
   * @example
   * dyvms
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **0**: number location first.
   * *   **1**: random.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  routeType?: number;
  static names(): { [key: string]: string } {
    return {
      corpNameList: 'CorpNameList',
      numberList: 'NumberList',
      ownerId: 'OwnerId',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpNameList: 'string',
      numberList: 'string',
      ownerId: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

