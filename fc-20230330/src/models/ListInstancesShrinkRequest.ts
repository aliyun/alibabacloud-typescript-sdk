// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesShrinkRequest extends $dara.Model {
  endTimeMs?: number;
  instanceIdsShrink?: string;
  instanceStatusShrink?: string;
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

