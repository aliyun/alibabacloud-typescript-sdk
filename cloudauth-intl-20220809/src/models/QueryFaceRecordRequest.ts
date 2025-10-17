// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Current Page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Face Group Code.
   * 
   * This parameter is required.
   * 
   * @example
   * Cu****D08q
   */
  faceGroupCode?: string;
  /**
   * @remarks
   * Face ID.
   * 
   * @example
   * 5006538
   */
  faceId?: string;
  /**
   * @remarks
   * Number of rows per page for paginated queries.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Merchant User ID.
   * 
   * @example
   * CuN6hiD08qr
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Used to request the next page of search results.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh0OP1yH8z+7FV4KKGUw4X32
   */
  nextToken?: string;
  /**
   * @remarks
   * Number of items per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Registration Type.
   * 
   * @example
   * MANUAL
   */
  registrationType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      faceGroupCode: 'FaceGroupCode',
      faceId: 'FaceId',
      maxResults: 'MaxResults',
      merchantUserId: 'MerchantUserId',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      registrationType: 'RegistrationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      faceGroupCode: 'string',
      faceId: 'string',
      maxResults: 'number',
      merchantUserId: 'string',
      nextToken: 'string',
      pageSize: 'number',
      registrationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

