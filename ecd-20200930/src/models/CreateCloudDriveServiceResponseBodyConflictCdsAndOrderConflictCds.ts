// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive.
   * 
   * @example
   * cn-hangzhou+cds-778205****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
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

