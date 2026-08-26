// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The model space ID.
   * 
   * @example
   * pms-xxx
   */
  modelSpaceName?: string;
  /**
   * @remarks
   * The region ID.
   * > * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region information of all clusters under the specified account.
   * > * If this parameter is left empty, scheduled tasks in all regions under the current account are queried by default.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      modelSpaceName: 'ModelSpaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      modelSpaceName: 'string',
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

