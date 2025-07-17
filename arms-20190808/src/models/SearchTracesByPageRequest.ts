// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTracesByPageRequestExclusionFilters extends $dara.Model {
  /**
   * @remarks
   * The key that is used to filter the query results.
   * 
   * @example
   * http.status_code
   */
  key?: string;
  /**
   * @remarks
   * The value of the key that is used to filter the query results.
   * 
   * @example
   * 404
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The following system preset fields are provided:
   * 
   * *   traceId: the ID of the trace.
   * *   serverApp: the name of the server application.
   * *   clientApp: the name of the client application.
   * *   service: the name of the interface.
   * *   rpc: the type of the call.
   * *   msOfSpan: the duration exceeds a specific value.
   * *   clientIp: the IP address of the client.
   * *   serverIp: the IP address of the server.
   * *   isError: specifies whether the call is abnormal.
   * 
   * @example
   * http.status_code
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 200
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1595210400000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  exclusionFilters?: SearchTracesByPageRequestExclusionFilters[];
  /**
   * @remarks
   * Specifies whether to include the traces of abnormal calls.
   * 
   * *   `true`: No
   * *   `false` (default): Yes
   * 
   * @example
   * false
   */
  isError?: boolean;
  /**
   * @remarks
   * The minimum amount of time consumed by traces. Unit: milliseconds.
   * 
   * @example
   * 2
   */
  minDuration?: number;
  /**
   * @remarks
   * The name of the traced span.
   * 
   * @example
   * /demo/queryNotExistDB/11
   */
  operationName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * b590lhguqs@9781be0f44dXXXX
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to sort the query results in chronological order or reverse chronological order. Default value: `false`.
   * 
   * *   `true`: sorts the query results in reverse chronological order.
   * *   `false`: sorts the query results in chronological order.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The IP address of the host where the application resides.
   * 
   * @example
   * 172.20.XX.XX
   */
  serviceIp?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * arms-k8s-demo-subcomponent
   */
  serviceName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1595174400000
   */
  startTime?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: SearchTracesByPageRequestTags[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      exclusionFilters: 'ExclusionFilters',
      isError: 'IsError',
      minDuration: 'MinDuration',
      operationName: 'OperationName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesByPageRequestExclusionFilters },
      isError: 'boolean',
      minDuration: 'number',
      operationName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      reverse: 'boolean',
      serviceIp: 'string',
      serviceName: 'string',
      startTime: 'number',
      tags: { 'type': 'array', 'itemType': SearchTracesByPageRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.exclusionFilters)) {
      $dara.Model.validateArray(this.exclusionFilters);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

