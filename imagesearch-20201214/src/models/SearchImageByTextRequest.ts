// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByTextRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  distinctProductId?: boolean;
  /**
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @example
   * 10
   */
  num?: number;
  scoreThreshold?: string;
  /**
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      distinctProductId: 'DistinctProductId',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      scoreThreshold: 'ScoreThreshold',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctProductId: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      scoreThreshold: 'string',
      start: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

