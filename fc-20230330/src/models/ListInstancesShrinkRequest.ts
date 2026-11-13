// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesShrinkRequest extends $dara.Model {
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
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The list of instance statuses.
   */
  instanceStatusShrink?: string;
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
      instanceIdsShrink: 'instanceIds',
      instanceStatusShrink: 'instanceStatus',
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
      instanceIdsShrink: 'string',
      instanceStatusShrink: 'string',
      limit: 'string',
      qualifier: 'string',
      startKey: 'string',
      startTimeMs: 'number',
      withAllActive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

