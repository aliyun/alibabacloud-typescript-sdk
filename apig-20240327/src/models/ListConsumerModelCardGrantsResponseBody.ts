// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerModelCardGrantsResponseBodyDataEntitlementState extends $dara.Model {
  /**
   * @remarks
   * The applied revision number.
   * 
   * @example
   * 1
   */
  appliedRevision?: number;
  /**
   * @remarks
   * The desired revision number.
   * 
   * @example
   * 2
   */
  desiredRevision?: number;
  /**
   * @remarks
   * The error message returned when the projection fails.
   * 
   * @example
   * Configuration delivery failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The projection status. Valid values: Pending, Applying, Committed, and Failed.
   * 
   * @example
   * Committed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appliedRevision: 'appliedRevision',
      desiredRevision: 'desiredRevision',
      errorMessage: 'errorMessage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedRevision: 'number',
      desiredRevision: 'number',
      errorMessage: 'string',
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

export class ListConsumerModelCardGrantsResponseBodyDataGrantsItems extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the authorization was granted.
   * 
   * @example
   * 1719386834548
   */
  grantTimestamp?: number;
  /**
   * @remarks
   * The ID of the Model API to which the authorization belongs.
   * 
   * @example
   * api-d00000000000000000000
   */
  httpApiId?: string;
  /**
   * @remarks
   * The ID of the model card.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The ID of the authorized principal.
   * 
   * @example
   * cs-d00000000000000000000
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the authorized principal.
   * 
   * @example
   * Consumer
   */
  principalType?: string;
  /**
   * @remarks
   * The target type. Valid values: MODEL and MODEL_GROUP. If omitted, the value defaults to MODEL. For MODEL_GROUP rows, the modelCardId carries the group ID, and direct entitlements are not expanded or forged.
   * 
   * @example
   * MODEL
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      grantTimestamp: 'grantTimestamp',
      httpApiId: 'httpApiId',
      modelCardId: 'modelCardId',
      principalId: 'principalId',
      principalType: 'principalType',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantTimestamp: 'number',
      httpApiId: 'string',
      modelCardId: 'string',
      principalId: 'string',
      principalType: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerModelCardGrantsResponseBodyDataGrants extends $dara.Model {
  /**
   * @remarks
   * The list of model entitlement facts.
   */
  items?: ListConsumerModelCardGrantsResponseBodyDataGrantsItems[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListConsumerModelCardGrantsResponseBodyDataGrantsItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerModelCardGrantsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The projection state of the model entitlement in the gateway domain.
   */
  entitlementState?: ListConsumerModelCardGrantsResponseBodyDataEntitlementState;
  /**
   * @remarks
   * The paginated list of model entitlements.
   */
  grants?: ListConsumerModelCardGrantsResponseBodyDataGrants;
  static names(): { [key: string]: string } {
    return {
      entitlementState: 'entitlementState',
      grants: 'grants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entitlementState: ListConsumerModelCardGrantsResponseBodyDataEntitlementState,
      grants: ListConsumerModelCardGrantsResponseBodyDataGrants,
    };
  }

  validate() {
    if(this.entitlementState && typeof (this.entitlementState as any).validate === 'function') {
      (this.entitlementState as any).validate();
    }
    if(this.grants && typeof (this.grants as any).validate === 'function') {
      (this.grants as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerModelCardGrantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. Ok is returned if the request is successful. A specific business error code is returned if the request fails.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned by the consumer operation.
   */
  data?: ListConsumerModelCardGrantsResponseBodyData;
  /**
   * @remarks
   * The response message that describes the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID generated by the system to trace the API call.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListConsumerModelCardGrantsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

