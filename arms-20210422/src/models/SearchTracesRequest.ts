// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTracesRequestExclusionFilters extends $dara.Model {
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

export class SearchTracesRequestTag extends $dara.Model {
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

export class SearchTracesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  exclusionFilters?: SearchTracesRequestExclusionFilters[];
  minDuration?: number;
  operationName?: string;
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
  tag?: SearchTracesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      exclusionFilters: 'ExclusionFilters',
      minDuration: 'MinDuration',
      operationName: 'OperationName',
      regionId: 'RegionId',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesRequestExclusionFilters },
      minDuration: 'number',
      operationName: 'string',
      regionId: 'string',
      reverse: 'boolean',
      serviceIp: 'string',
      serviceName: 'string',
      startTime: 'number',
      tag: { 'type': 'array', 'itemType': SearchTracesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.exclusionFilters)) {
      $dara.Model.validateArray(this.exclusionFilters);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

