// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneGroupResponseBodyDataApplicationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 406073bf-afc2-4142-b3d7-629a0308****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * java-app
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

export class ListSwimmingLaneGroupResponseBodyDataEntryApplication extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 406073bf-afc2-4142-b3d7-629a0308****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * java-app
   */
  appName?: string;
  /**
   * @remarks
   * The data source. Set the value to EDAS.
   * 
   * @example
   * EDAS
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The applications that are related to the lane group.
   */
  applicationList?: ListSwimmingLaneGroupResponseBodyDataApplicationList[];
  /**
   * @remarks
   * The information about the Enterprise Distributed Application Service (EDAS) ingress gateway.
   */
  entryApplication?: ListSwimmingLaneGroupResponseBodyDataEntryApplication;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 257
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
   * The ID of the microservices namespace.
   * 
   * @example
   * cn-shanghai:daily
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
      applicationList: { 'type': 'array', 'itemType': ListSwimmingLaneGroupResponseBodyDataApplicationList },
      entryApplication: ListSwimmingLaneGroupResponseBodyDataEntryApplication,
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

export class ListSwimmingLaneGroupResponseBody extends $dara.Model {
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
   * The data of the lane group.
   */
  data?: ListSwimmingLaneGroupResponseBodyData[];
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
   * BF238E37-671A-5045-B49A-0B29C166****
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
      data: { 'type': 'array', 'itemType': ListSwimmingLaneGroupResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

