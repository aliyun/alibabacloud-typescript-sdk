// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsResponseBodyDataFunctions extends $dara.Model {
  class?: string;
  creationTime?: number;
  displayName?: string;
  name?: string;
  owner?: string;
  resources?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'class',
      creationTime: 'creationTime',
      displayName: 'displayName',
      name: 'name',
      owner: 'owner',
      resources: 'resources',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      creationTime: 'number',
      displayName: 'string',
      name: 'string',
      owner: 'string',
      resources: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyData extends $dara.Model {
  functions?: ListFunctionsResponseBodyDataFunctions[];
  marker?: string;
  maxItem?: number;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      marker: 'marker',
      maxItem: 'maxItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyDataFunctions },
      marker: 'string',
      maxItem: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $dara.Model {
  data?: ListFunctionsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFunctionsResponseBodyData,
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

