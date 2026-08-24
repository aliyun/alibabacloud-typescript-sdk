// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call [ListClusters](https://help.aliyun.com/document_detail/87116.html) to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

