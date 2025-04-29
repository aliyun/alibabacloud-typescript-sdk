// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiGroupResponseBodyStageItemsStageInfo extends $dara.Model {
  /**
   * @remarks
   * The environment description.
   * 
   * @example
   * MYTEST
   */
  description?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * 123e8dc7bbe01613b5b1d726c2a7888e
   */
  stageId?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * TEST
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      stageId: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

