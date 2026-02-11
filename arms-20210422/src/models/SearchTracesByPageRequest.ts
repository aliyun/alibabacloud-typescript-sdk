// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTracesByPageRequestExclusionFilters extends $dara.Model {
  key?: string;
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
   * This parameter is required.
   */
  endTime?: number;
  exclusionFilters?: SearchTracesByPageRequestExclusionFilters[];
  minDuration?: number;
  operationName?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  reverse?: boolean;
  serviceIp?: string;
  serviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      exclusionFilters: 'ExclusionFilters',
      minDuration: 'MinDuration',
      operationName: 'OperationName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesByPageRequestExclusionFilters },
      minDuration: 'number',
      operationName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      reverse: 'boolean',
      serviceIp: 'string',
      serviceName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.exclusionFilters)) {
      $dara.Model.validateArray(this.exclusionFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

