// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The dictionary configuration items.
   * 
   * > The value of the Config parameter overwrites the existing configuration. To delete a dictionary configuration, remove it from the request.
   * 
   * Call the [DescribeDBConfig](https://help.aliyun.com/document_detail/2360627.html) operation to query the dictionary configuration of the target instance.
   * 
   * @example
   * <dictionaries><dictionary><name>test_dictionary</name><source><clickhouse><host>10.0.0.0</host><port>3003</port><user>TestUser</user><password>testPassword</password><db>default</db><table>dictTestTable01</table><where>active=1</where><invalidate_query>SELECT max(value) FROM dictTestTable01</invalidate_query></clickhouse></source><lifetime><min>200</min><max>600</max></lifetime><layout><flat></flat></layout><structure><id><name>id</name><type>UInt64</type></id><attribute><name>value</name><type>String</type><null_value></null_value></attribute></structure></dictionary></dictionaries>
   */
  config?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1r59y779o04****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. Call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the IDs of available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBClusterId: 'string',
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

