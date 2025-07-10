// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppAttributesResponseBodyAppsAppAttributeTags } from "./DescribeAppAttributesResponseBodyAppsAppAttributeTags";


export class DescribeAppAttributesResponseBodyAppsAppAttribute extends $dara.Model {
  /**
   * @remarks
   * The ID of the app.
   * 
   * @example
   * 20112314518278
   */
  appId?: number;
  /**
   * @remarks
   * The name of the app.
   * 
   * @example
   * CreateApptest
   */
  appName?: string;
  /**
   * @remarks
   * The creation time (UTC) of the app.
   * 
   * @example
   * 2016-07-31T04:10:19Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the app.
   * 
   * @example
   * App test
   */
  description?: string;
  disabled?: boolean;
  /**
   * @remarks
   * 扩展信息
   * 
   * @example
   * 110461946884
   */
  extend?: string;
  /**
   * @remarks
   * The modification time (UTC) of the app.
   * 
   * @example
   * 2016-07-31T04:10:19Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeAppAttributesResponseBodyAppsAppAttributeTags;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createdTime: 'CreatedTime',
      description: 'Description',
      disabled: 'Disabled',
      extend: 'Extend',
      modifiedTime: 'ModifiedTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createdTime: 'string',
      description: 'string',
      disabled: 'boolean',
      extend: 'string',
      modifiedTime: 'string',
      tags: DescribeAppAttributesResponseBodyAppsAppAttributeTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

