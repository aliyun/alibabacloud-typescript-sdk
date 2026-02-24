// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregatorRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * A maximum of 20 tag keys can be attached.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * A maximum of 20 tag values can be attached.
   * 
   * @example
   * value-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-88ea626622af0055****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated and is not in use.
   * 
   * A maximum of 20 tags can be attached.
   * 
   * @deprecated
   */
  tag?: GetAggregatorRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      tag: { 'type': 'array', 'itemType': GetAggregatorRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

