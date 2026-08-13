// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryDirectoryFailedSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * 目录 ID（递归包含子目录下的失败资源）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

