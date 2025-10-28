// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSwimmingLaneGroupResponseBodyDataApplicationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 476d26d9-b54c-40b8-8af9-d898cdc2****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBodyDataEntryApplication extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * d52c9de9-53d0-4191-aa72-88974a6f****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-gateway
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of applications related to the lane group.
   */
  applicationList?: UpdateSwimmingLaneGroupResponseBodyDataApplicationList[];
  /**
   * @remarks
   * The EDAS ingress gateway information.
   */
  entryApplication?: UpdateSwimmingLaneGroupResponseBodyDataEntryApplication;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 98
   */
  id?: number;
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-hangzhou:test
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationList: 'ApplicationList',
      entryApplication: 'EntryApplication',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationList: { 'type': 'array', 'itemType': UpdateSwimmingLaneGroupResponseBodyDataApplicationList },
      entryApplication: UpdateSwimmingLaneGroupResponseBodyDataEntryApplication,
      id: 'number',
      name: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationList)) {
      $dara.Model.validateArray(this.applicationList);
    }
    if(this.entryApplication && typeof (this.entryApplication as any).validate === 'function') {
      (this.entryApplication as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSwimmingLaneGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: UpdateSwimmingLaneGroupResponseBodyData;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7580ED24-A2F0-5ECC-9F2B-B92E2509****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdateSwimmingLaneGroupResponseBodyData,
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

