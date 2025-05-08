// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGResponseBodySDGsPreloadInfos extends $dara.Model {
  /**
   * @remarks
   * The time when the SDG was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-16T06:18:40Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-20000
   */
  namespace?: string;
  /**
   * @remarks
   * The number of redundant replicas to quickly respond to shared mounts.
   * 
   * @example
   * 2
   */
  redundantNum?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the status was last updated.
   * 
   * @example
   * 2021-01-22T08:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      namespace: 'Namespace',
      redundantNum: 'RedundantNum',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      namespace: 'string',
      redundantNum: 'number',
      regionId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

