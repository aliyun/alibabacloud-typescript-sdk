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
   * The region ID of the change set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to obtain the template. Valid values:
   * 
   * *   true
   * *   false (default)
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

