// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * ClientKey
   */
  authenticationMethod?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * @example
   * aap_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationMethod: 'AuthenticationMethod',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationMethod: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponseBodyApplicationAccessPoints extends $dara.Model {
  applicationAccessPoint?: ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint[];
  static names(): { [key: string]: string } {
    return {
      applicationAccessPoint: 'ApplicationAccessPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessPoint: { 'type': 'array', 'itemType': ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint },
    };
  }

  validate() {
    if(Array.isArray(this.applicationAccessPoint)) {
      $dara.Model.validateArray(this.applicationAccessPoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of AAPs.
   */
  applicationAccessPoints?: ListApplicationAccessPointsResponseBodyApplicationAccessPoints;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * bcfefe15-46f0-44a3-bd96-3d422474b71a
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationAccessPoints: 'ApplicationAccessPoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessPoints: ListApplicationAccessPointsResponseBodyApplicationAccessPoints,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.applicationAccessPoints && typeof (this.applicationAccessPoints as any).validate === 'function') {
      (this.applicationAccessPoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

