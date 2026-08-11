// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Runtime extends $dara.Model {
  /**
   * @remarks
   * The name of a container runtime. The following types of runtime are supported by Container Service for Kubernetes (ACK).
   * 
   * *   `containerd`: supports all Kubernetes versions. We recommend that you set the parameter to this value.
   * *   `Sandboxed-Container.runv`: Sandboxed container provides enhanced isolation and supports Kubernetes 1.24 and earlier.
   * *   `docker`: supports Kubernetes 1.22 and earlier.
   * 
   * Default value: `containerd`.
   * 
   * @example
   * docker
   */
  name?: string;
  /**
   * @remarks
   * The version of the container runtime. By default, the latest version is used.
   * 
   * For more information about the changes to Sandboxed-Container, see [Sandboxed-Container release notes](https://help.aliyun.com/document_detail/160312.html).
   * 
   * @example
   * 19.03.5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

