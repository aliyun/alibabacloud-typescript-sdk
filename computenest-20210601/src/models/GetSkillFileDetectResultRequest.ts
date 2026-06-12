// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillFileDetectResultRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the detection task.
   * 
   * This parameter is required.
   * 
   * @example
   * 2aceb074-fa72-44d2-99d9-45b17cffe0e7
   */
  hashKey?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hashKey: 'HashKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hashKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

