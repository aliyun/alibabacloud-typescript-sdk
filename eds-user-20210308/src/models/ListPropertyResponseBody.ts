// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPropertyResponseBodyProperties } from "./ListPropertyResponseBodyProperties";


export class ListPropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is empty, all results have been returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the properties.
   */
  properties?: ListPropertyResponseBodyProperties[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      properties: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      properties: { 'type': 'array', 'itemType': ListPropertyResponseBodyProperties },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

