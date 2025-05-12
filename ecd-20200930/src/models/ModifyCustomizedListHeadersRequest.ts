// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCustomizedListHeadersRequestHeaders } from "./ModifyCustomizedListHeadersRequestHeaders";


export class ModifyCustomizedListHeadersRequest extends $dara.Model {
  /**
   * @remarks
   * The headers.
   */
  headers?: ModifyCustomizedListHeadersRequestHeaders[];
  /**
   * @remarks
   * The type of the list.
   * 
   * Valid values:
   * 
   * *   desktop: cloud computer
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * desktop
   */
  listType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      listType: 'ListType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': ModifyCustomizedListHeadersRequestHeaders },
      listType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

