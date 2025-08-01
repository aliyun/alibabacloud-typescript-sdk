// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationListResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hkhon1po62@5f1b08becb*****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * finance
   */
  appName?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instancesNumber?: number;
  /**
   * @remarks
   * The programming language of the application.
   * 
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @remarks
   * The microservice namespace to which the application belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the application.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 0
   */
  status?: number;
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1234567890
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      extraInfo: 'ExtraInfo',
      instancesNumber: 'InstancesNumber',
      language: 'Language',
      namespace: 'Namespace',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      extraInfo: 'string',
      instancesNumber: 'number',
      language: 'string',
      namespace: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data returned.
   */
  result?: GetApplicationListResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 11
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': GetApplicationListResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: GetApplicationListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F55E608F-7C15-****-9CFD-DF832EBC4A0F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetApplicationListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

