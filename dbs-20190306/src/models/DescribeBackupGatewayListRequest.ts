// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupGatewayListRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. This prevents duplicate requests.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique identifier of the backup gateway. You can query multiple gateways by separating the identifiers with commas (,).
   * 
   * @example
   * 7213527653217
   */
  identifier?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 0 and cannot exceed the maximum value of an integer. The default value is 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of records on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * > The default value is 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region of the DBS instance. Valid values:
   * 
   * - **cn-hangzhou**: China (Hangzhou)
   * 
   * - **cn-shanghai**: China (Shanghai)
   * 
   * - **cn-qingdao**: China (Qingdao)
   * 
   * - **cn-beijing**: China (Beijing)
   * 
   * - **cn-shenzhen**: China (Shenzhen)
   * 
   * - **cn-hongkong**: China (Hong Kong)
   * 
   * - **ap-southeast-1**: Singapore
   * 
   * - **cn-hangzhou-finance**: Hangzhou Finance Cloud
   * 
   * - **cn-shanghai-finance**: Shanghai Finance Cloud
   * 
   * - **cn-shenzhen-finance**: Shenzhen Finance Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      identifier: 'Identifier',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      identifier: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

