// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFunctionsResponseBodyDataFunctions } from "./ListFunctionsResponseBodyDataFunctions";


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

