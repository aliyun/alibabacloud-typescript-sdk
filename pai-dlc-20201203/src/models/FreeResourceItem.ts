// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FreeResourceItem extends $dara.Model {
  /**
   * @remarks
   * The resource count.
   * 
   * @example
   * 2
   */
  availableNumber?: number;
  /**
   * @remarks
   * The cluster ID.
   */
  clusterID?: string;
  /**
   * @remarks
   * The cluster name.
   */
  clusterName?: string;
  /**
   * @remarks
   * The idle resource ID.
   * 
   * @example
   * freeres-whateversth
   */
  freeResourceId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * inner
   */
  regionID?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * cpu
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      availableNumber: 'AvailableNumber',
      clusterID: 'ClusterID',
      clusterName: 'ClusterName',
      freeResourceId: 'FreeResourceId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      regionID: 'RegionID',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableNumber: 'number',
      clusterID: 'string',
      clusterName: 'string',
      freeResourceId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      regionID: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

