// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendListResponseBodyBackendInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * groupName
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * e3b881d0-e2d0-4dfb-b1fb-a2a3d1e534b7
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

