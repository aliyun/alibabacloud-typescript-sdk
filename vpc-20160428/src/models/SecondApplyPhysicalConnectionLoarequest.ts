// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SecondApplyPhysicalConnectionLOARequestPMInfo extends $dara.Model {
  /**
   * @remarks
   * The ID number of the construction engineer. You can specify the ID number of an ID card or an international passport.
   * 
   * You can configure information for up to 16 construction engineers.
   * 
   * @example
   * 5****************9
   */
  PMCertificateNo?: string;
  /**
   * @remarks
   * The type of the identity document of the construction engineer. Valid values:
   * 
   * *   **IDCard**
   * *   **Passport**
   * 
   * @example
   * IDCard
   */
  PMCertificateType?: string;
  /**
   * @remarks
   * The contact information about the construction engineer.
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
   * Zhangsan
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

export class SecondApplyPhysicalConnectionLOARequest extends $dara.Model {
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the customer company that requires the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * company
   */
  companyName?: string;
  /**
   * @remarks
   * The time when construction started. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-02-28T16:00:00Z
   */
  constructionTime?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1qrb3044eqi****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of Express Connect circuit. Valid values:
   * 
   * *   **MSTP**
   * *   **MPLSVPN**
   * *   **FIBRE**
   * *   **Other**
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
   */
  PMInfo?: SecondApplyPhysicalConnectionLOARequestPMInfo[];
  /**
   * @remarks
   * The geographic location where the Express Connect circuit is deployed.
   * 
   * @example
   * XX Number, XX Road, XX Town, XX District, Hangzhou City, Zhejiang Province.
   */
  peerLocation?: string;
  /**
   * @remarks
   * The region where the Express Connect circuit is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The construction company.
   * 
   * This parameter is required.
   * 
   * @example
   * company
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
      PMInfo: { 'type': 'array', 'itemType': SecondApplyPhysicalConnectionLOARequestPMInfo },
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

