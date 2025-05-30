// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDataSourcesResponseBodyDataObjectListConfig extends $dara.Model {
  desc?: string;
  enums?: string[];
  /**
   * @example
   * basic_group
   */
  group?: string;
  /**
   * @example
   * bigquery.range.partition.migrate.type
   */
  key?: string;
  name?: string;
  /**
   * @example
   * Cluster or Partition
   */
  placeHolder?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * .keytab
   */
  subType?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * Partition
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enums: 'enums',
      group: 'group',
      key: 'key',
      name: 'name',
      placeHolder: 'placeHolder',
      required: 'required',
      subType: 'subType',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enums: { 'type': 'array', 'itemType': 'string' },
      group: 'string',
      key: 'string',
      name: 'string',
      placeHolder: 'string',
      required: 'boolean',
      subType: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.enums)) {
      $dara.Model.validateArray(this.enums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

