// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise network disk.
   * 
   * @example
   * cn-hangzhou+cds-778205****
   */
  cdsId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions that are supported by Elastic Desktop Service.
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
   * The ID of the enterprise network disk (The order is not paid, and the enterprise network disk cannot be used).
   * 
   * @example
   * cn-hangzhou+cds-778205****
   */
  cdsId?: string;
  /**
   * @remarks
   * The order ID. You can obtain the order ID on the **Order Management** page in the Alibaba Cloud User Center.
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
   * The information of conflicting enterprise network disks.
   */
  conflictCds?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds[];
  /**
   * @remarks
   * The information of conflicting unpaid orders for enterprise network disks (orders for subscription enterprise network disks).
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
   * The ID of the enterprise network disk.
   * 
   * @example
   * cn-hangzhou+cds-778205****
   */
  cdsId?: string;
  /**
   * @remarks
   * The name of the cloud storage service.
   * 
   * @example
   * CDS_Windows_1126
   */
  cdsName?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * > If you want to connect to a cloud desktop through a VPC, you can add the office network to a CEN instance. This CEN instance connects to your on-premises network through a VPN or a dedicated line.
   * 
   * @example
   * cen-638u3wxds9snyc****
   */
  cenId?: string;
  /**
   * @remarks
   * The existing enterprise network disks or orders for enterprise network disks that conflict with the enterprise network disk that you want to create.
   */
  conflictCdsAndOrder?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrder;
  /**
   * @remarks
   * The name of the Active Directory (AD) domain corresponding to the AD office network.
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
   * The maximum storage usage of the enterprise network disk. Unit: bytes.
   * 
   * @example
   * 5368709120
   */
  maxSize?: string;
  /**
   * @remarks
   * The office network type.
   * 
   * @example
   * AD_CONNECTOR
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The order ID. You can obtain the order ID on the Order Management page in the Alibaba Cloud User Center.
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

