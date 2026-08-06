// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The function definitions.
   */
  functions?: string[];
  /**
   * @remarks
   * A pagination token. Use this token to retrieve the next page of results. If this parameter is null, all results have been returned.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      nextPageToken: 'nextPageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': 'string' },
      nextPageToken: 'string',
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

