// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDigitalEmployeesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the digital employee.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The type of the digital employee.
   * 
   * @example
   * custom
   */
  employeeType?: string;
  /**
   * @remarks
   * The page size. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * xxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      employeeType: 'employeeType',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      resourceGroupId: 'resourceGroupId',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      employeeType: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

