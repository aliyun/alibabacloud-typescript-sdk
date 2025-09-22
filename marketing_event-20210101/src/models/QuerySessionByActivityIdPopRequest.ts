// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionByActivityIdPopRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

