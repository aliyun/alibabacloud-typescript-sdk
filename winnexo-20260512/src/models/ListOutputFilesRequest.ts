// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutputFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the output item. Valid values: ppt, html, document, picture, slides, video, audio, email, and others.
   * 
   * @example
   * ppt
   */
  itemType?: string;
  /**
   * @remarks
   * The keyword for searching. Matches output titles or item names.
   * 
   * @example
   * string_value
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object). Used to filter results by name.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to display only outputs and output items that have sharing enabled.
   * 
   * @example
   * False
   */
  sharedOnly?: boolean;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass it explicitly with --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      itemType: 'itemType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      page: 'page',
      pageSize: 'pageSize',
      sharedOnly: 'sharedOnly',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      page: 'number',
      pageSize: 'number',
      sharedOnly: 'boolean',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

