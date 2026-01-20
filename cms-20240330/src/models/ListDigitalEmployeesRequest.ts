// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDigitalEmployeesRequest extends $dara.Model {
  displayName?: string;
  employeeType?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * xxxxxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      employeeType: 'employeeType',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      employeeType: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

