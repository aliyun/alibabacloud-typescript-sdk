// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration that you want to modify.
   * 
   * *   MaintainTime: the O\\&M time
   * *   DBInstanceDescription: the cluster name
   * 
   * This parameter is required.
   * 
   * @example
   * DBInstanceDescription
   */
  attributeType?: string;
  /**
   * @remarks
   * The new value of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  attributeValue?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * clickhouse
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeType: 'AttributeType',
      attributeValue: 'AttributeValue',
      DBInstanceId: 'DBInstanceId',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeType: 'string',
      attributeValue: 'string',
      DBInstanceId: 'string',
      product: 'string',
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

