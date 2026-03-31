// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceInventoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a91d626622af0035****
   */
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

