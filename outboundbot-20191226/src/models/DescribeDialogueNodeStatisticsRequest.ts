// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDialogueNodeStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aeff669b-388f-4619-82af-81e177df5628
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a3c670d1-01bf-491d-b9aa-759b1a82f47c
   */
  jobGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

