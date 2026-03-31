// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyDataTables extends $dara.Model {
  /**
   * @remarks
   * The time when the table was created.
   * 
   * @example
   * 2022-01-17T07:07:47Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * sale_detail
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dim_odps
   */
  name?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * 1887853961230110
   */
  owner?: string;
  /**
   * @remarks
   * The schema to which the table belongs.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The type of the table.
   * 
   * @example
   * internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'creationTime',
      displayName: 'displayName',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      displayName: 'string',
      name: 'string',
      owner: 'string',
      schema: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The information about tables.
   */
  tables?: ListTablesResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      tables: { 'type': 'array', 'itemType': ListTablesResponseBodyDataTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTablesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a06dd4516687375802853481ec9fd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTablesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

