// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertSwimmingLaneGroupResponseBodyDataApplicationListApplication extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * bdb251cc-02a6-48dd-891b-2ab21b25****
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

export class InsertSwimmingLaneGroupResponseBodyDataApplicationList extends $dara.Model {
  application?: InsertSwimmingLaneGroupResponseBodyDataApplicationListApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': InsertSwimmingLaneGroupResponseBodyDataApplicationListApplication },
    };
  }

  validate() {
    if(Array.isArray(this.application)) {
      $dara.Model.validateArray(this.application);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSwimmingLaneGroupResponseBodyDataEntryApplication extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * bdb251cc-02a6-48dd-891b-2ab21b25c****
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

export class InsertSwimmingLaneGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of all applications that are related to the lane group.
   */
  applicationList?: InsertSwimmingLaneGroupResponseBodyDataApplicationList;
  /**
   * @remarks
   * The information about the Enterprise Distributed Application Service (EDAS) ingress gateway.
   */
  entryApplication?: InsertSwimmingLaneGroupResponseBodyDataEntryApplication;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 64
   */
  id?: number;
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * test
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
      applicationList: InsertSwimmingLaneGroupResponseBodyDataApplicationList,
      entryApplication: InsertSwimmingLaneGroupResponseBodyDataEntryApplication,
      id: 'number',
      name: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    if(this.applicationList && typeof (this.applicationList as any).validate === 'function') {
      (this.applicationList as any).validate();
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

export class InsertSwimmingLaneGroupResponseBody extends $dara.Model {
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
  data?: InsertSwimmingLaneGroupResponseBodyData;
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
   * D5268CAC-D356-5C8D-BC7C-FBE0D13B****
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
      data: InsertSwimmingLaneGroupResponseBodyData,
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

