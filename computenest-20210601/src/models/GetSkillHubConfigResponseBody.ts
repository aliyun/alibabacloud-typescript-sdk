// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillHubConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * mybucket
   */
  ossBucketName?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  ossRegionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2849EE73-AFFA-5AFD-9575-12FA886451DA
   */
  requestId?: string;
  /**
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ossBucketName: 'OssBucketName',
      ossRegionId: 'OssRegionId',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ossBucketName: 'string',
      ossRegionId: 'string',
      requestId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

