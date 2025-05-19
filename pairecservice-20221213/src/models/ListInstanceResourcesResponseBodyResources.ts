// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResourcesResponseBodyResources extends $dara.Model {
  /**
   * @example
   * DataManagement
   */
  category?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2020-10-13 17:34:52
   */
  gmtCreateAt?: string;
  /**
   * @example
   * 2020-10-13 17:34:52
   */
  gmtModifiedAt?: string;
  /**
   * @example
   * storage
   */
  group?: string;
  /**
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @example
   * OSS
   */
  type?: string;
  /**
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      config: 'Config',
      gmtCreateAt: 'GmtCreateAt',
      gmtModifiedAt: 'GmtModifiedAt',
      group: 'Group',
      resourceId: 'ResourceId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: 'string',
      gmtCreateAt: 'string',
      gmtModifiedAt: 'string',
      group: 'string',
      resourceId: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

