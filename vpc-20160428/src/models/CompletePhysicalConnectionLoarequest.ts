// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompletePhysicalConnectionLOARequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * The client generates the value of this parameter. Ensure that the value is unique among different requests.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 02fb3da4-230e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether the construction acceptance is completed. Valid values:
   * * **true**: The construction is completed and reported.
   * * **false**: Line O&M.
   * 
   * @example
   * true
   */
  finishWork?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp10tvlhnwkw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The line code of the telecommunications service provider.
   * 
   * @example
   * aaa111****
   */
  lineCode?: string;
  /**
   * @remarks
   * The cable label in the data center building.
   * 
   * @example
   * bbb222****
   */
  lineLabel?: string;
  /**
   * @remarks
   * The O&M contact information of the line.
   * 
   * @example
   * 1388888****
   */
  lineSPContactInfo?: string;
  /**
   * @remarks
   * The telecommunications service provider. Valid values:
   * - **中国电信**
   * - **中国联通**
   * - **中国移动**
   * - **中国其他**
   * 
   * @example
   * 中国其他
   */
  lineServiceProvider?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      finishWork: 'FinishWork',
      instanceId: 'InstanceId',
      lineCode: 'LineCode',
      lineLabel: 'LineLabel',
      lineSPContactInfo: 'LineSPContactInfo',
      lineServiceProvider: 'LineServiceProvider',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      finishWork: 'boolean',
      instanceId: 'string',
      lineCode: 'string',
      lineLabel: 'string',
      lineSPContactInfo: 'string',
      lineServiceProvider: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

