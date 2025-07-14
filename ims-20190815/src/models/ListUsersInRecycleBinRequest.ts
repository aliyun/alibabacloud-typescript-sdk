// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersInRecycleBinRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition that is used to query information about a specified RAM user in the recycle bin.
   * 
   * You must specify this parameter in the `UserPrincipalName eq <username>@<AccountAlias>.onaliyun.com` format.
   * 
   * @example
   * UserPrincipalName eq test@example.onaliyun.com
   */
  filter?: string;
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
   * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be true.
   * 
   * Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      marker: 'string',
      maxItems: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

