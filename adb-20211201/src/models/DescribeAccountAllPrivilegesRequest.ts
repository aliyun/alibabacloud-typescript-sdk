// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAllPrivilegesRequest extends $dara.Model {
  /**
   * @remarks
   * The database account name for the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * <props="china">The cluster ID for the Enterprise Edition, Basic Edition, or Data Lakehouse Edition.
   * <props="intl">The cluster ID for the Data Lakehouse Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp14t95lun0w****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * If the response is truncated, use the `Marker` value from the response in this field to retrieve the next set of results.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
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
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      marker: 'Marker',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      marker: 'string',
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

