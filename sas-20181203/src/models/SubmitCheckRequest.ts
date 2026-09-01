// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCheckRequest extends $dara.Model {
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The scan range. Valid values:
   * - **FULL**: scans all check items
   * - **POLICY**: scans custom-configured check items
   * 
   * @example
   * POLICY
   */
  scanRange?: string;
  /**
   * @remarks
   * The task source. Valid values:
   * 
   * - **YAO_CHI**: Alibaba Cloud ApsaraDB console.
   * 
   * @example
   * YAO_CHI
   */
  taskSource?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      scanRange: 'ScanRange',
      taskSource: 'TaskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'number',
      scanRange: 'string',
      taskSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

