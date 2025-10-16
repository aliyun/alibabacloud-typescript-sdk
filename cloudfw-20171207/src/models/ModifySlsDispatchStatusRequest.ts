// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySlsDispatchStatusRequest extends $dara.Model {
  /**
   * @example
   * internet_log
   */
  dispatchValue?: string;
  /**
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @example
   * attack,acl
   */
  filterKeys?: string;
  /**
   * @example
   * cn-shanghai
   */
  newRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchValue: 'DispatchValue',
      enableStatus: 'EnableStatus',
      filterKeys: 'FilterKeys',
      newRegionId: 'NewRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchValue: 'string',
      enableStatus: 'boolean',
      filterKeys: 'string',
      newRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

