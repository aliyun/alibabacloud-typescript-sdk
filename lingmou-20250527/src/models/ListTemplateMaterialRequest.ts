// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateMaterialRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * M1Ti7gfj7VGDQgD588hxReiw
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * M1Ti7gfj7VGDQgD588hxReiw,M1j9tcbkh9YtBw7BdOYlDusQ
   */
  templateIds?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      size: 'size',
      templateIds: 'templateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      size: 'number',
      templateIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

