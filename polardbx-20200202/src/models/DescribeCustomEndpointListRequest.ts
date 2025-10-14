// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEndpointListRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  checkDeleteCN?: boolean;
  /**
   * @example
   * pxe-b6e****no4pfap1s
   */
  customEndpointIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      checkDeleteCN: 'CheckDeleteCN',
      customEndpointIds: 'CustomEndpointIds',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDeleteCN: 'boolean',
      customEndpointIds: 'string',
      DBInstanceName: 'string',
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

