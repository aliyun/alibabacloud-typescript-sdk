// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoScalingConfigRequestStorage extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to apply the **Storage** configuration of the automatic storage expansion feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  apply?: boolean;
  /**
   * @remarks
   * The average storage usage threshold that triggers automatic storage expansion. Unit: %. Valid values:
   * 
   * *   **50**
   * *   **60**
   * *   **70**
   * *   **80**
   * *   **90**
   * 
   * @example
   * 70
   * 
   * **if can be null:**
   * true
   */
  diskUsageUpperThreshold?: number;
  /**
   * @remarks
   * The maximum storage size of the database instance. Unit: GB. The value must be greater than or equal to the total storage size of the instance.
   * 
   * *   If the instance uses ESSDs, the maximum value of this parameter can be 32000.
   * *   If the instance uses standard SSDs, the maximum value of this parameter can be 6000.
   * 
   * >  The standard SSD storage type is phased out. We recommend that you [upgrade the storage type of your instance from standard SSDs to ESSDs](https://help.aliyun.com/document_detail/314678.html).
   * 
   * @example
   * 32000
   * 
   * **if can be null:**
   * true
   */
  maxStorage?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic storage expansion. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  upgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      apply: 'Apply',
      diskUsageUpperThreshold: 'DiskUsageUpperThreshold',
      maxStorage: 'MaxStorage',
      upgrade: 'Upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apply: 'boolean',
      diskUsageUpperThreshold: 'number',
      maxStorage: 'number',
      upgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

