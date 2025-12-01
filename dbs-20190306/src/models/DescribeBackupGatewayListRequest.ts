// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupGatewayListRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique identifier of the backup gateway. You can query multiple backup gateways. Separate multiple identifiers with commas (,).
   * 
   * @example
   * 7213527653217
   */
  identifier?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be a positive integer. Default value: 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * > Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which Database Backup (DBS) is activated. Valid values:
   * 
   * *   **cn-hangzhou**: China (Hangzhou)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-qingdao**: China (Qingdao)
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-hongkong**: China (Hong Kong)
   * *   **ap-southeast-1**: Singapore (Singapore)
   * *   **cn-hangzhou-finance**: China East 1 Finance
   * *   **cn-shanghai-finance**: China East 2 Finance
   * *   **cn-shenzhen-finance**: China South 1 Finance
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

