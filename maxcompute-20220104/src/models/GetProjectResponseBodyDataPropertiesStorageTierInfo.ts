// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize } from "./GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize";


export class GetProjectResponseBodyDataPropertiesStorageTierInfo extends $dara.Model {
  /**
   * @remarks
   * The backup storage usage.
   * 
   * @example
   * 86672917
   */
  projectBackupSize?: number;
  /**
   * @remarks
   * The total storage usage.
   * 
   * @example
   * 56066037
   */
  projectTotalSize?: number;
  /**
   * @remarks
   * The [storage tier](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) information.
   */
  storageTierSize?: GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize;
  static names(): { [key: string]: string } {
    return {
      projectBackupSize: 'projectBackupSize',
      projectTotalSize: 'projectTotalSize',
      storageTierSize: 'storageTierSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBackupSize: 'number',
      projectTotalSize: 'number',
      storageTierSize: GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize,
    };
  }

  validate() {
    if(this.storageTierSize && typeof (this.storageTierSize as any).validate === 'function') {
      (this.storageTierSize as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

