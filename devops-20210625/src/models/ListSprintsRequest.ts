// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSprintsRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  spaceIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Project
   */
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      spaceIdentifier: 'spaceIdentifier',
      spaceType: 'spaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      spaceIdentifier: 'string',
      spaceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

