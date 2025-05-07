// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FreeResourceItem extends $dara.Model {
  /**
   * @example
   * 2
   */
  availableNumber?: number;
  clusterID?: string;
  clusterName?: string;
  /**
   * @example
   * freeres-whateversth
   */
  freeResourceId?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * inner
   */
  regionID?: string;
  /**
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

