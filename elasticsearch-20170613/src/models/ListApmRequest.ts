// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApmRequest extends $dara.Model {
  /**
   * @example
   * APMtest
   */
  description?: string;
  /**
   * @example
   * apm-cn-i7m2fuae****
   */
  instanceId?: string;
  /**
   * @example
   * es-cn-i7m2fsfhc001x****
   */
  output?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      instanceId: 'instanceId',
      output: 'output',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      output: 'string',
      page: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

