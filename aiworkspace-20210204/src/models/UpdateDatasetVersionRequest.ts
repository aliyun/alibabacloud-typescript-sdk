// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetVersionRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  dataCount?: number;
  /**
   * @example
   * 100000
   */
  dataSize?: number;
  description?: string;
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      description: 'Description',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      description: 'string',
      options: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

