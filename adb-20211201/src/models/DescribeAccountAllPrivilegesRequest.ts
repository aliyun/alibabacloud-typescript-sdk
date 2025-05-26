// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAllPrivilegesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp14t95lun0w****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies the start position marker from which to return results. If you receive a response indicating that the results are truncated, set this parameter to the value of the `Marker` parameter in the response that you received.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The region ID of the cluster.
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

