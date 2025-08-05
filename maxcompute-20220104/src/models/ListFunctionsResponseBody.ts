// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsResponseBodyDataFunctions extends $dara.Model {
  /**
   * @remarks
   * The class in which the function was defined.
   * 
   * @example
   * abc
   */
  class?: string;
  /**
   * @remarks
   * The time when the function was created. Unit: milliseconds.
   * 
   * @example
   * 1664505167000
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name of the function.
   * 
   * @example
   * getdate
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * getdate
   */
  name?: string;
  /**
   * @remarks
   * The owner of the function.
   * 
   * @example
   * odpsowner
   */
  owner?: string;
  /**
   * @remarks
   * The name of the resource that was associated with the function.
   * 
   * @example
   * abc
   */
  resources?: string;
  /**
   * @remarks
   * The schema of the function.
   * 
   * @example
   * abc
   */
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
  /**
   * @remarks
   * The information about each function.
   */
  functions?: ListFunctionsResponseBodyDataFunctions[];
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
  /**
   * @remarks
   * The returned data.
   */
  data?: ListFunctionsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0b716671885050924814e3623
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

