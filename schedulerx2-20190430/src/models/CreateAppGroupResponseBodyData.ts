// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAppGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * 6607
   */
  appGroupId?: number;
  /**
   * @remarks
   * The AppKey for the application.
   * 
   * @example
   * adcExHZviL******
   */
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

