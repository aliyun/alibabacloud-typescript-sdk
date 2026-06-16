// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceServersForUserRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition.
   * 
   * @example
   * ApplicationIds
   */
  name?: string;
  /**
   * @remarks
   * The list of filter condition values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceServersForUserRequest extends $dara.Model {
  /**
   * @remarks
   * The list of filter conditions.
   */
  filter?: ListResourceServersForUserRequestFilter[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. Set this to the NextToken value from the previous API call.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListResourceServersForUserRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

