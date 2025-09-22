// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllActivityInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  activityId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

