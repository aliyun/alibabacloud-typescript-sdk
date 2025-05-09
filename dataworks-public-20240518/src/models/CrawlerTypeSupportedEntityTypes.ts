// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CrawlerTypeSupportedEntityTypes extends $dara.Model {
  /**
   * @example
   * 如对于maxcompute-schema类型，schema层级是否存在可选（是否开启三层模型）
   */
  optional?: boolean;
  /**
   * @example
   * database
   */
  parentSubType?: string;
  /**
   * @example
   * table
   */
  subType?: string;
  /**
   * @example
   * dlf-table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      optional: 'Optional',
      parentSubType: 'ParentSubType',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optional: 'boolean',
      parentSubType: 'string',
      subType: 'string',
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

