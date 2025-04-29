// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppNamesResponseBodyData extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appGroupId?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 15
   */
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appName: 'AppName',
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      appName: 'string',
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

