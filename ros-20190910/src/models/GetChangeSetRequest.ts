// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c11658d-bd47-4dd0-ba64-727edc62****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The ID of the region to which the change set belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return the template. Valid values:
   * 
   * - true: The template is returned.
   * 
   * - false (default): The template is not returned.
   * 
   * @example
   * false
   */
  showTemplate?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      regionId: 'RegionId',
      showTemplate: 'ShowTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      regionId: 'string',
      showTemplate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

