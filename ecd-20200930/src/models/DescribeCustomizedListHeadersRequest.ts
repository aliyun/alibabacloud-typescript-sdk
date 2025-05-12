// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizedListHeadersRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  langType?: string;
  /**
   * @example
   * desktop
   */
  listType?: string;
  /**
   * @remarks
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

