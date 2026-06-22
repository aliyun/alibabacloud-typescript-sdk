// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientConfStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The resource tag of the client to query.
   * 
   * This parameter is required.
   * 
   * @example
   * machineResource
   */
  tag?: string;
  /**
   * @remarks
   * The tag value of the asset. Valid values:
   * - major
   * - advanced
   * - basic.
   * 
   * This parameter is required.
   * 
   * @example
   * major
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

