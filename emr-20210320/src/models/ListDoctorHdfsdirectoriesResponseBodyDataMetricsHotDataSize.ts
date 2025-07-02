// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataSize extends $dara.Model {
  /**
   * @example
   * Size of the hot data size
   */
  description?: string;
  /**
   * @example
   * hotDataSize
   */
  name?: string;
  /**
   * @example
   * MB
   */
  unit?: string;
  /**
   * @example
   * 6701531944206
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

