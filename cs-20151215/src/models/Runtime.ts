// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Runtime extends $dara.Model {
  /**
   * @remarks
   * Specifies the container runtime. Valid values:
   * 
   * - `containerd`: Recommended. Supported in version 1.20 and later.
   * - `Sandboxed-Container.runv`: Sandboxed container that provides higher isolation. Supported in version 1.16 and later.
   * - `docker`: Supported in clusters of version 1.22 and earlier.
   * 
   * Default value: `containerd`.
   * 
   * @example
   * containerd
   */
  name?: string;
  /**
   * @remarks
   * The container runtime version. By default, the latest version is used. For more information about the release notes, see [Container runtime release notes](https://help.aliyun.com/document_detail/207829.html).
   * 
   * @example
   * 1.6.20
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

