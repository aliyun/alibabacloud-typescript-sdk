// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SparkConf extends $dara.Model {
  /**
   * @remarks
   * The key of the SparkConf object.
   * 
   * This parameter is required.
   * 
   * @example
   * spark.app.name
   */
  key?: string;
  /**
   * @remarks
   * The value of the SparkConf object.
   * 
   * This parameter is required.
   * 
   * @example
   * test_application
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

