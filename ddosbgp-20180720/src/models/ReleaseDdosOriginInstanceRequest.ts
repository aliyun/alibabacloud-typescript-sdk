// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseDdosOriginInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance that you want to release.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosorigin_cn-pe335v7gs01
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

