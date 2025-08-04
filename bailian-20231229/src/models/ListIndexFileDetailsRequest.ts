// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexFileDetailsRequest extends $dara.Model {
  documentName?: string;
  /**
   * @example
   * FINISH
   */
  documentStatus?: string;
  /**
   * @example
   * false
   */
  enableNameLike?: string;
  /**
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      documentName: 'DocumentName',
      documentStatus: 'DocumentStatus',
      enableNameLike: 'EnableNameLike',
      indexId: 'IndexId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentName: 'string',
      documentStatus: 'string',
      enableNameLike: 'string',
      indexId: 'string',
      pageNumber: 'number',
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

