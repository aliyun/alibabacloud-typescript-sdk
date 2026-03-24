// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDigitalEmployeesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Digital employee display name.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Digital employee type.
   * 
   * @example
   * custom
   */
  employeeType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 20. The maximum value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Digital employee name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Token for the next page of results.
   * 
   * @example
   * xxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Tags.
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

