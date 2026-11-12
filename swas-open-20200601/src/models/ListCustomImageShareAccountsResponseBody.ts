// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomImageShareAccountsResponseBodyImageShareUsers extends $dara.Model {
  /**
   * @remarks
   * The time when the custom image was shared, in the format of YYYY-MM-DD HH:mm:ss.S.
   * 
   * @example
   * 2024-07-15 13:59:21.0
   */
  sharedTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID with which the custom image is shared.
   * 
   * @example
   * 125111425233****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      sharedTime: 'SharedTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImageShareAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the shared custom images.
   */
  imageShareUsers?: ListCustomImageShareAccountsResponseBodyImageShareUsers[];
  /**
   * @remarks
   * The page number of the paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageShareUsers: 'ImageShareUsers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageShareUsers: { 'type': 'array', 'itemType': ListCustomImageShareAccountsResponseBodyImageShareUsers },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageShareUsers)) {
      $dara.Model.validateArray(this.imageShareUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

