// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The time when the dynamic parameter was created, in UTC and ISO 8601 format.
   * 
   * @example
   * 2024-01-01T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The name of the dynamic parameter.
   * 
   * @example
   * rate_limit
   */
  key?: string;
  /**
   * @remarks
   * The time when the dynamic parameter was last updated, in UTC and ISO 8601 format.
   * 
   * @example
   * 2024-01-01T10:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The value of the dynamic parameter.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      key: 'Key',
      updatedAt: 'UpdatedAt',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      key: 'string',
      updatedAt: 'string',
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

export class ListConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of dynamic parameters.
   * 
   * @example
   * [{"Key": "rate_limit", "Value": "{\\"limit\\": 100}", "CreatedAt": "2024-01-15T10:30:00Z", "UpdatedAt": "2024-01-15T10:30:00Z"}]
   */
  configs?: ListConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * Indicates if more entries are available. `true` if more entries exist; otherwise, `false`.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * my-service
   */
  name?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries found.
   * 
   * @example
   * 150
   */
  total?: number;
  /**
   * @remarks
   * The configuration type.
   * 
   * @example
   * Service
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      hasMore: 'HasMore',
      name: 'Name',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListConfigsResponseBodyConfigs },
      hasMore: 'boolean',
      name: 'string',
      page: 'number',
      pageSize: 'number',
      total: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

