// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientConfStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The tag that is added to the server.
   * 
   * This parameter is required.
   * 
   * @example
   * machineResource
   */
  tag?: string;
  /**
   * @remarks
   * The value of the tag. Valid values:
   * 
   * *   major
   * *   advanced
   * *   basic
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

