// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTablesResponseBodyDataObjectListSchemaPartitions extends $dara.Model {
  comment?: string;
  /**
   * @example
   * abc
   */
  defaultValue?: string;
  /**
   * @example
   * p1
   */
  name?: string;
  /**
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      defaultValue: 'defaultValue',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

