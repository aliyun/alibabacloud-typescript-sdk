// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDataExportJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1276****
   */
  jobId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 420****
   */
  orderId?: number;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      orderId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

