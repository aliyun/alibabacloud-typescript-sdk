// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTenantDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * 删除模式：reject / recursive / move_to_root
   * 
   * @example
   * reject
   */
  deleteMode?: string;
  /**
   * @remarks
   * 目录唯一标识
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
      deleteMode: 'deleteMode',
      directoryId: 'directoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMode: 'string',
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

