// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters assets by the original file name prefix. The maximum length is 255 characters. If this parameter is omitted or left empty, no filtering is applied.
   * 
   * @example
   * guide
   */
  fileNamePrefix?: string;
  /**
   * @remarks
   * The maximum number of assets to return per page. Maximum value: 100. If this parameter is omitted or set to 0, the default value 20 is used.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The opaque pagination token returned in the previous response. It is a composite cursor based on the upload time and assetId, and is bound to the resource scope and filter conditions. Do not specify this parameter for the first request. If you change the resource or filter conditions, start from the first page. Do not parse or modify the token. If a legacy or cross-scope token is used, an InvalidParameter error is returned. In this case, clear the token and query again. Overwrite uploads change the sorting position, so pagination does not guarantee consistent snapshots across pages.
   * 
   * @example
   * opaque-next-token
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters assets by their current processing status. If this parameter is omitted, no filtering is applied. Deleted assets are not included in the list. If you set this parameter to DELETED, an empty list is returned.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileNamePrefix: 'fileNamePrefix',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileNamePrefix: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

