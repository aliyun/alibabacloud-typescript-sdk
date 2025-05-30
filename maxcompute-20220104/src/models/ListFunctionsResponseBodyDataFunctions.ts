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

