// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise NAS drive.
   * 
   * @example
   * cn-hangzhou+cds-778205****
   */
  cdsId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise NAS drive. The order is not paid, and the NAS drive is unavailable.
   * 
   * @example
   * cn-hangzhou+cds-778205****
   */
  cdsId?: string;
  /**
   * @remarks
   * The order ID. You can obtain the order ID on the **Orders** page in the Alibaba Cloud User Center.
   * 
   * @example
   * 22442411898****
   */
  orderId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      orderId: 'OrderId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      orderId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrder extends $dara.Model {
  /**
   * @remarks
   * The information about the conflicting NAS drive.
   */
  conflictCds?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds[];
  /**
   * @remarks
   * The information about the conflicting unpaid NAS drive order (subscription NAS drive order).
   */
  conflictOrder?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder[];
  static names(): { [key: string]: string } {
    return {
      conflictCds: 'ConflictCds',
      conflictOrder: 'ConflictOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCds: { 'type': 'array', 'itemType': CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds },
      conflictOrder: { 'type': 'array', 'itemType': CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder },
    };
  }

  validate() {
    if(Array.isArray(this.conflictCds)) {
      $dara.Model.validateArray(this.conflictCds);
    }
    if(Array.isArray(this.conflictOrder)) {
      $dara.Model.validateArray(this.conflictOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudDriveServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise NAS drive.
   * 
   * @example
   * cn-hangzhou+cds-778205****
   */
  cdsId?: string;
  /**
   * @remarks
   * The service name of the cloud storage.
   * 
   * @example
   * CDS_Windows_1126
   */
  cdsName?: string;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
   * 
   * > To connect to cloud desktops over a VPC, you can add the office network to a CEN instance. This CEN instance is the one to which the on-premises network is connected by using a VPN or Express Connect circuit.
   * 
   * @example
   * cen-638u3wxds9snyc****
   */
  cenId?: string;
  /**
   * @remarks
   * The existing NAS drive or NAS drive order that conflicts with the NAS drive to be created.
   */
  conflictCdsAndOrder?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrder;
  /**
   * @remarks
   * The AD domain name of the AD office network.
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
   * The maximum storage capacity of the enterprise NAS drive. Unit: bytes.
   * 
   * @example
   * 5368709120
   */
  maxSize?: string;
  /**
   * @remarks
   * The network type of the office network.
   * 
   * @example
   * AD_CONNECTOR
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The order ID. You can obtain the order ID on the Orders page in the Alibaba Cloud User Center.
   * 
   * @example
   * 214552063030752
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 062B1439-709A-580E-85DF-CE97A156****
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

