// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * {
   *   "cron": "0 0 * * 1,2,3,4,5,6,7",
   *   "enabled": true,
   *   "filter": {
   *     "field": "cat_id",
   *     "days": 30,
   *     "unit": "s"
   *   }
   * }
   */
  body?: any;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

