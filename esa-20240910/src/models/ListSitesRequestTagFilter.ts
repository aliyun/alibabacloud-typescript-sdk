// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter specifies a filter condition for the query.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter specifies a filter condition for the query.
   * 
   * @example
   * aaa
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

