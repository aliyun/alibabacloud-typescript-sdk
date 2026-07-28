// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyPhysicalConnectionLOARequestPMInfo extends $dara.Model {
  /**
   * @remarks
   * The ID number of the construction engineer. You can specify an ID card number or an international passport number.
   * 
   * You can specify information about up to 16 construction engineers.
   * 
   * @example
   * 5****************9
   */
  PMCertificateNo?: string;
  /**
   * @remarks
   * The type of the ID document of the construction engineer. Valid values:
   * 
   * - **IDCard**: ID card.
   * - **Passport**: international passport.
   * 
   * @example
   * IDCard
   */
  PMCertificateType?: string;
  /**
   * @remarks
   * The contact information of the construction engineer.
   * 
   * @example
   * 1390000****
   */
  PMContactInfo?: string;
  /**
   * @remarks
   * The gender of the construction engineer.
   * 
   * @example
   * Male
   */
  PMGender?: string;
  /**
   * @remarks
   * The name of the construction engineer.
   * 
   * @example
   * 张三
   */
  PMName?: string;
  static names(): { [key: string]: string } {
    return {
      PMCertificateNo: 'PMCertificateNo',
      PMCertificateType: 'PMCertificateType',
      PMContactInfo: 'PMContactInfo',
      PMGender: 'PMGender',
      PMName: 'PMName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PMCertificateNo: 'string',
      PMCertificateType: 'string',
      PMContactInfo: 'string',
      PMGender: 'string',
      PMName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyPhysicalConnectionLOARequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the Express Connect circuit. Unit: Mbit/s.
   * 
   * Valid values: **2** to **10240**.
   * 
   * @example
   * 3
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a unique value from your client to ensure that different requests have unique ClientToken values. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the company that accesses the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * company
   */
  companyName?: string;
  /**
   * @remarks
   * The time when the construction company enters the site. The time is in the ISO 8601 standard and must be in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-02-28T16:00:00Z
   */
  constructionTime?: string;
  /**
   * @remarks
   * The instance ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1qrb3044eqi****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the Express Connect circuit. Valid values:
   * 
   * - **MSTP**: MSTP line.
   * - **MPLSVPN**: MPLSVPN line.
   * - **FIBRE**: fiber optic direct connection.
   * - **Other**: other type of line.
   * 
   * This parameter is required.
   * 
   * @example
   * FIBRE
   */
  lineType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The information about the construction engineer.
   * 
   * > This parameter is required. Specify the relevant information.
   */
  PMInfo?: ApplyPhysicalConnectionLOARequestPMInfo[];
  /**
   * @remarks
   * The geographical location where the Express Connect circuit is deployed.
   * 
   * @example
   * 杭州
   */
  peerLocation?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The construction company of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里
   */
  si?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      companyName: 'CompanyName',
      constructionTime: 'ConstructionTime',
      instanceId: 'InstanceId',
      lineType: 'LineType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      PMInfo: 'PMInfo',
      peerLocation: 'PeerLocation',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      si: 'Si',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      companyName: 'string',
      constructionTime: 'string',
      instanceId: 'string',
      lineType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      PMInfo: { 'type': 'array', 'itemType': ApplyPhysicalConnectionLOARequestPMInfo },
      peerLocation: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      si: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.PMInfo)) {
      $dara.Model.validateArray(this.PMInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

