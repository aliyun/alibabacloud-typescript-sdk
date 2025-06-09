// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * product_info
   */
  indices?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qingning
   */
  snapshot?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      indices: 'indices',
      snapshot: 'snapshot',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: 'string',
      snapshot: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

