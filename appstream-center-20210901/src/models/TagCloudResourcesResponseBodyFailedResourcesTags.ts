// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagCloudResourcesResponseBodyFailedResourcesTags extends $dara.Model {
  /**
   * @example
   * System/Scheduler/STOP_NEW_USER_CONNECTION
   */
  key?: string;
  /**
   * @example
   * System
   */
  scope?: string;
  /**
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      scope: 'Scope',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      scope: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

