// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Function } from "./Function";


export class ListFunctionsOutput extends $dara.Model {
  /**
   * @remarks
   * The information about functions.
   */
  functions?: Function[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * next_function_name
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': Function },
      nextToken: 'string',
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

