// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompletePhysicalConnectionLOARequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * >  If you do not set this parameter, the system automatically uses **RequestId** as **ClientToken**. **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-230e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether the construction is completed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  finishWork?: boolean;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp10tvlhnwkw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The circuit code provided by the connectivity provider.
   * 
   * @example
   * aaa111****
   */
  lineCode?: string;
  /**
   * @remarks
   * The label of the cable in the data center.
   * 
   * @example
   * bbb222****
   */
  lineLabel?: string;
  /**
   * @remarks
   * The contact information about line O\\&M.
   * 
   * @example
   * 1388888****
   */
  lineSPContactInfo?: string;
  /**
   * @remarks
   * The ISP. Valid values:
   * 
   * *   **China Telecom**
   * *   **China Unicom**
   * *   **China Mobile**
   * *   **Other ISPs in China**
   * 
   * @example
   * Other ISPs in China
   */
  lineServiceProvider?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

