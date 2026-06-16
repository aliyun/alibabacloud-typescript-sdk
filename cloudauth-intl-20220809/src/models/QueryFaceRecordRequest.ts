// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The face library code.
   * 
   * This parameter is required.
   * 
   * @example
   * Cu****D08q
   */
  faceGroupCode?: string;
  /**
   * @remarks
   * The face ID.
   * 
   * @example
   * 5006538
   */
  faceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paginated query.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The merchant user ID.
   * 
   * @example
   * CuN6hiD08qr
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh0OP1yH8z+7FV4KKGUw4X32
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The registration type.
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

