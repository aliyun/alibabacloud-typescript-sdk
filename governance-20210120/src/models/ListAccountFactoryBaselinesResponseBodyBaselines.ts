// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountFactoryBaselinesResponseBodyBaselines extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Default
   */
  baselineName?: string;
  /**
   * @remarks
   * The time at which the baseline was created.
   * 
   * @example
   * 2021-11-30T09:09:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the baseline.
   * 
   * @example
   * Default baseline
   */
  description?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values:
   * 
   * *   System: default baseline.
   * *   Custom: custom baseline.
   * 
   * @example
   * Custom
   */
  type?: string;
  /**
   * @remarks
   * The time when the baseline was updated.
   * 
   * @example
   * 2022-12-29T07:08:40Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      createTime: 'CreateTime',
      description: 'Description',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      baselineName: 'string',
      createTime: 'string',
      description: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

