// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataSize extends $dara.Model {
  /**
   * @example
   * Size of the warm data size
   */
  description?: string;
  /**
   * @example
   * warmDataSize
   */
  name?: string;
  /**
   * @example
   * MB
   */
  unit?: string;
  /**
   * @example
   * 4062349775577
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

