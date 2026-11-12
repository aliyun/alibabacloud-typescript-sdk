// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Test application
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

