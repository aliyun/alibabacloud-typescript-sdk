// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCloudDriveServiceResponseBodyConflictCdsAndOrder } from "./CreateCloudDriveServiceResponseBodyConflictCdsAndOrder";


export class CreateCloudDriveServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive.
   * 
   * @example
   * cn-hangzhou+cds-7782057786
   */
  cdsId?: string;
  /**
   * @remarks
   * The name of the cloud disk that is created in Cloud Drive Service.
   * 
   * @example
   * CDS_Windows_1126
   */
  cdsName?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * >  To allow end users to connect to cloud computers via virtual private clouds (VPCs), attach your office network to a CEN instance. The CEN instance connects to your on-premises network through VPN Gateway or Express Connect.
   * 
   * @example
   * cen-638u3wxds9snyc****
   */
  cenId?: string;
  /**
   * @remarks
   * The existing enterprise drive or its order that conflicts with the enterprise drive being created.
   */
  conflictCdsAndOrder?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrder;
  /**
   * @remarks
   * The domain name of the enterprise AD office network.
   * 
   * @example
   * test1.local
   */
  domainName?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ExistConflictCds
   */
  errorCode?: string;
  /**
   * @remarks
   * The maximum storage capacity of the enterprise drive. Unit: bytes.
   * 
   * @example
   * 213674622976
   */
  maxSize?: string;
  /**
   * @remarks
   * The type of the office network.
   * 
   * Valid values:
   * 
   * *   SIMPLE: convenience office network.
   * *   AD_CONNECTOR: enterprise AD office network.
   * 
   * @example
   * AD_CONNECTOR
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The ID of the order. You can obtain an order ID on the Orders page in the Expenses and Costs console.
   * 
   * @example
   * 214552063030752
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 062B1439-709A-580E-85DF-CE97A1560565
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      cdsName: 'CdsName',
      cenId: 'CenId',
      conflictCdsAndOrder: 'ConflictCdsAndOrder',
      domainName: 'DomainName',
      errorCode: 'ErrorCode',
      maxSize: 'MaxSize',
      officeSiteType: 'OfficeSiteType',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      cdsName: 'string',
      cenId: 'string',
      conflictCdsAndOrder: CreateCloudDriveServiceResponseBodyConflictCdsAndOrder,
      domainName: 'string',
      errorCode: 'string',
      maxSize: 'string',
      officeSiteType: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.conflictCdsAndOrder && typeof (this.conflictCdsAndOrder as any).validate === 'function') {
      (this.conflictCdsAndOrder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

