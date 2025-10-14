// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEvaluateAndImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      slinkTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

