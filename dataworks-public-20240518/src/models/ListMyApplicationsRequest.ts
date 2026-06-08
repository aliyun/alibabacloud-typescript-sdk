// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyApplicationsRequestResource extends $dara.Model {
  /**
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * v1.0.0
   */
  defVersion?: string;
  metaData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      defSchema: 'DefSchema',
      defVersion: 'DefVersion',
      metaData: 'MetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defSchema: 'string',
      defVersion: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resource?: ListMyApplicationsRequestResource;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      defSchema: 'DefSchema',
      endTime: 'EndTime',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resource: 'Resource',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defSchema: 'string',
      endTime: 'number',
      nextToken: 'string',
      pageSize: 'number',
      resource: ListMyApplicationsRequestResource,
      resourceType: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(Array.isArray(this.resourceType)) {
      $dara.Model.validateArray(this.resourceType);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

