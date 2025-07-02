// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  endTimeMs?: number;
  instanceIds?: string[];
  instanceStatus?: string[];
  limit?: string;
  /**
   * @remarks
   * The function version or alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  startKey?: string;
  startTimeMs?: number;
  /**
   * @remarks
   * Specifies whether to list all instances. Valid values: true and false.
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

