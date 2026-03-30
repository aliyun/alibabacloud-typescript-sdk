// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo extends $dara.Model {
  displayName?: string;
  status?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBodyUserBasicInfos extends $dara.Model {
  userBasicInfo?: ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      userBasicInfo: 'UserBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userBasicInfo: { 'type': 'array', 'itemType': ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.userBasicInfo)) {
      $dara.Model.validateArray(this.userBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.``
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF2B25FD-CADE-445B-BE4D-E082E0FF1A0F
   */
  requestId?: string;
  userBasicInfos?: ListUserBasicInfosResponseBodyUserBasicInfos;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      userBasicInfos: 'UserBasicInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      userBasicInfos: ListUserBasicInfosResponseBodyUserBasicInfos,
    };
  }

  validate() {
    if(this.userBasicInfos && typeof (this.userBasicInfos as any).validate === 'function') {
      (this.userBasicInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

