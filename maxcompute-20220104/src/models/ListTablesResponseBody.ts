// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyDataTables extends $dara.Model {
  creationTime?: number;
  displayName?: string;
  name?: string;
  owner?: string;
  schema?: string;
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
  marker?: string;
  maxItem?: number;
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
  data?: ListTablesResponseBodyData;
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

