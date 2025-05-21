// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvatarResourceResponseBodyQueryResourceInfoList extends $dara.Model {
  /**
   * @example
   * 21275
   */
  resourceId?: string;
  /**
   * @example
   * STANDARD
   */
  type?: string;
  /**
   * @example
   * 1719904342237
   */
  validPeriodTime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      type: 'type',
      validPeriodTime: 'validPeriodTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      type: 'string',
      validPeriodTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

