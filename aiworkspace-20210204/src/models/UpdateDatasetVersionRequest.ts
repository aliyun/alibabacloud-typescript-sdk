// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The number of files in the dataset.
   * 
   * @example
   * 100
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the dataset files, in bytes.
   * 
   * @example
   * 100000
   */
  dataSize?: number;
  /**
   * @remarks
   * A custom description of the dataset to distinguish it from other datasets.
   * 
   * @example
   * This is a description of a dataset version.
   */
  description?: string;
  /**
   * @remarks
   * An extension field in the JSON String format.
   * When DLC uses the dataset, you can configure the mountPath field to specify the default mount path.
   * 
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

