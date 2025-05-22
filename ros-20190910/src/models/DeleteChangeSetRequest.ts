// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChangeSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * This parameter is required.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The region ID of the change set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
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

