// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizedListHeadersRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for exporting the WUYING Workspace list.
   * 
   * @example
   * zh-CN
   */
  langType?: string;
  /**
   * @remarks
   * The list type.
   * 
   * @example
   * desktop
   */
  listType?: string;
  /**
   * @remarks
   * The region ID. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to obtain the list of regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      langType: 'LangType',
      listType: 'ListType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      langType: 'string',
      listType: 'string',
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

