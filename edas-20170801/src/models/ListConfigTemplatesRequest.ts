// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Pages start from Page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the configuration template.
   * 
   * @example
   * 3d84efaf-37d9-49fb-a3a8-b38d5c******
   */
  id?: number;
  /**
   * @remarks
   * The name of the configuration template.
   * 
   * @example
   * config-tmpl-1
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      id: 'Id',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      id: 'number',
      name: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

