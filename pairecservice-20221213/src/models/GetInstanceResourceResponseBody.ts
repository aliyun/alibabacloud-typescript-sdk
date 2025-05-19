// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResourceResponseBody extends $dara.Model {
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
  gmtCreateTime?: string;
  /**
   * @example
   * 2020-10-13 17:34:52
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * storage
   */
  group?: string;
  /**
   * @example
   * D75C43DC-3D3A-5CC8-9AAC-8C77306C433B
   */
  requestId?: string;
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
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      group: 'Group',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      group: 'string',
      requestId: 'string',
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

