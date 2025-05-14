// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActivityListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 0q8gsudxxx
   */
  activityId?: string;
  /**
   * @example
   * activity123
   */
  activityName?: string;
  /**
   * @example
   * activity123
   */
  activityNameInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityName: 'ActivityName',
      activityNameInEnglish: 'ActivityNameInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityName: 'string',
      activityNameInEnglish: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

