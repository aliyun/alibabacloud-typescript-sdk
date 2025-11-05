// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupMetricDataRequest extends $dara.Model {
  /**
   * @example
   * 1593950832000
   */
  beginTime?: number;
  /**
   * @example
   * 1750176000000
   */
  endTime?: number;
  /**
   * @example
   * 100
   */
  length?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSpec
   */
  metricName?: string;
  /**
   * @example
   * FFqBJBxE8I0PE0IUO6K69k7m2FfyWNNc2qQ9ReUkazhz9VA7dWZKlxBcjUwOV0imSM
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

