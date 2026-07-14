// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentListRequest extends $dara.Model {
  /**
   * @remarks
   * The document library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The document status.
   * 
   * @example
   * 即将可用
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'string',
      page: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

