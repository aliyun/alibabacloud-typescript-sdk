// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value is group1. This is an internal parameter that you can ignore.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of CUs that the Dedicated SQL version can use. A CU is a compute core that can be used for parallel processing when the Dedicated SQL version is running.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * The time when the configuration for the Dedicated SQL version was created. This is a UNIX timestamp.
   * 
   * @example
   * 1710230272
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the configuration for the Dedicated SQL version was updated. This is a UNIX timestamp.
   * 
   * @example
   * 1710230272
   */
  updateTime?: number;
  /**
   * @remarks
   * Indicates whether the Dedicated SQL version is enabled by default for the project. If this parameter is set to true, all query and analysis operations in the project, such as alerts and dashboards, use the Dedicated SQL version.
   * 
   * @example
   * true
   */
  useAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      cu: 'cu',
      createTime: 'createTime',
      updateTime: 'updateTime',
      useAsDefault: 'useAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      cu: 'number',
      createTime: 'number',
      updateTime: 'number',
      useAsDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSqlInstanceResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetSqlInstanceResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

