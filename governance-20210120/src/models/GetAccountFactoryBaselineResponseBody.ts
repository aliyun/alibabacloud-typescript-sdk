// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAccountFactoryBaselineResponseBodyBaselineItems } from "./GetAccountFactoryBaselineResponseBodyBaselineItems";


export class GetAccountFactoryBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp16ae2k8a3yo3d*****
   */
  baselineId?: string;
  /**
   * @remarks
   * The baseline items.
   */
  baselineItems?: GetAccountFactoryBaselineResponseBodyBaselineItems[];
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
   * The time when the baseline was created.
   * 
   * @example
   * 2022-11-28T00:46:34Z
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
   * The request ID.
   * 
   * @example
   * 60D54503-F1F6-51B6-B6FA-A70CBDA2A68C
   */
  requestId?: string;
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
   * 2022-11-02T01:00:07Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      baselineName: 'BaselineName',
      createTime: 'CreateTime',
      description: 'Description',
      requestId: 'RequestId',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': GetAccountFactoryBaselineResponseBodyBaselineItems },
      baselineName: 'string',
      createTime: 'string',
      description: 'string',
      requestId: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

