// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The end time (UNIX timestamp in milliseconds).
   * 
   * @example
   * 1790899200000
   */
  endTimeMs?: number;
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The list of instance statuses.
   */
  instanceStatus?: string[];
  /**
   * @remarks
   * The maximum number of instances to return.
   * 
   * @example
   * 100
   */
  limit?: string;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The start marker.
   * 
   * @example
   * c-01234567-89abcdef-0123456789ab～
   */
  startKey?: string;
  /**
   * @remarks
   * The start time (UNIX timestamp in milliseconds).
   * 
   * @example
   * 1790812800000
   */
  startTimeMs?: number;
  /**
   * @remarks
   * Specifies whether to list all instances. Valid values: true, false.
   * 
   * @example
   * true
   */
  withAllActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      endTimeMs: 'endTimeMs',
      instanceIds: 'instanceIds',
      instanceStatus: 'instanceStatus',
      limit: 'limit',
      qualifier: 'qualifier',
      startKey: 'startKey',
      startTimeMs: 'startTimeMs',
      withAllActive: 'withAllActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeMs: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceStatus: { 'type': 'array', 'itemType': 'string' },
      limit: 'string',
      qualifier: 'string',
      startKey: 'string',
      startTimeMs: 'number',
      withAllActive: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.instanceStatus)) {
      $dara.Model.validateArray(this.instanceStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

