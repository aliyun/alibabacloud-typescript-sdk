// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderForRdsRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON string that contains the order details. For more information, see [CreateDBInstance](https://help.aliyun.com/document_detail/26228.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"key":"value"}
   */
  params?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
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

