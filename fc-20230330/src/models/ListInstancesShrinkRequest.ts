// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range, specified as a UNIX timestamp in milliseconds.
   */
  endTimeMs?: number;
  /**
   * @remarks
   * A list of instance IDs to return.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * An array of instance statuses. The operation returns only instances whose status is in this array.
   */
  instanceStatusShrink?: string;
  /**
   * @remarks
   * The maximum number of instances to return.
   */
  limit?: string;
  /**
   * @remarks
   * The function version or alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The token that specifies where to start the query. It is returned in a truncated response and can be used to retrieve the next page of results.
   */
  startKey?: string;
  /**
   * @remarks
   * The start time of the query range, specified as a UNIX timestamp in milliseconds.
   */
  startTimeMs?: number;
  /**
   * @remarks
   * Specifies whether to list all active instances.
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

