// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebshellTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the init container.
   * 
   * Note:
   * 
   * *   If you specify this parameter, Cloud Assistant runs the command in the specified container of the instances.
   * 
   * *   If this parameter is specified, the command can run only on Linux instances on which Cloud Assistant Agent 2.2.3.344 or later is installed.
   * 
   *     *   For information about how to query the version of Cloud Assistant Agent, see [Install Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   *     *   For information about how to upgrade Cloud Assistant Agent, see [Upgrade or disable upgrades for Cloud Assistant Agent](https://help.aliyun.com/document_detail/134383.html).
   * 
   * *   If this parameter is specified, the `Username` parameter that is specified in a request to call this operation and the `WorkingDir` parameter that is specified in a request to call the [CreateCommand](https://help.aliyun.com/document_detail/64844.html) operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * *   If this parameter is specified, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to `#!/usr/bin/python` at the beginning of a script to specify a script interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * ad-helper
   */
  containerName?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * This parameter is required.
   * 
   * @example
   * hello-podsdfsdfsdfsdf
   */
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containerName: 'ContainerName',
      podName: 'PodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containerName: 'string',
      podName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

