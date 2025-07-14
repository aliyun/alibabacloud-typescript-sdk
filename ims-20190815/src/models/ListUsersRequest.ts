// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * operator
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * alice
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

export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries per page. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be true.
   * 
   * Valid values: 1 to 1000. Default value: 1000.
   * 
   * @example
   * 1000
   */
  maxItems?: number;
  /**
   * @remarks
   * The status of the RAM users that you want to query. Valid values: active, freeze, and active,freeze. If you leave the parameter empty, the value active is used by default. If you specify a value for the Tag parameter, users in both states are queried.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The tags. A maximum number of 20 tags are supported.
   */
  tag?: ListUsersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListUsersRequestTag },
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

