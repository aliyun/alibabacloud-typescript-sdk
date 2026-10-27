// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeInstanceStatsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances. You can specify 1 to 100 instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

