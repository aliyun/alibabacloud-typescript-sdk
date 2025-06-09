// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * project_name
   */
  name?: string;
  /**
   * @example
   * 2
   */
  cu?: number;
  /**
   * @example
   * 1710230272
   */
  createTime?: number;
  /**
   * @example
   * 1710230272
   */
  updateTime?: number;
  /**
   * @example
   * true
   */
  useAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      cu: 'cu',
      createTime: 'createTime',
      updateTime: 'updateTime',
      useAsDefault: 'useAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      cu: 'number',
      createTime: 'number',
      updateTime: 'number',
      useAsDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

