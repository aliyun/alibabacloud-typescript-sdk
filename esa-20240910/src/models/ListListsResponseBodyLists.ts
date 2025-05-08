// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsResponseBodyLists extends $dara.Model {
  /**
   * @remarks
   * The list description.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom list.[](~~2850217~~)
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @remarks
   * The list type.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * The length of the list information array, which indicates how many items the list contains.
   * 
   * @example
   * 100
   */
  length?: number;
  /**
   * @remarks
   * The list name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The time when the list was last modified.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      kind: 'Kind',
      length: 'Length',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      kind: 'string',
      length: 'number',
      name: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

