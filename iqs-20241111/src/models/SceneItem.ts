// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SceneItem extends $dara.Model {
  /**
   * @remarks
   * The result details for vertical scenarios. Different scenarios return different JSON string structures.
   * 
   * @example
   * {"title":"London time","targetTimeZone":"Europe/London"}
   */
  detail?: string;
  /**
   * @remarks
   * The result type for vertical scenarios, such as weather or time.
   * 
   * @example
   * time
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

