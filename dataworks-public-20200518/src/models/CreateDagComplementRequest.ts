// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDagComplementRequest extends $dara.Model {
  /**
   * @example
   * 00:00:00
   */
  bizBeginTime?: string;
  /**
   * @example
   * 23:00:00
   */
  bizEndTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-05-21 00:00:00
   */
  endBizDate?: string;
  /**
   * @example
   * 1234
   */
  excludeNodeIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74324,74325
   */
  includeNodeIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xm_test
   */
  name?: string;
  /**
   * @example
   * {74324:"key1=val1 key2=val"}
   */
  nodeParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  parallelism?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  rootNodeId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-05-20 00:00:00
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizBeginTime: 'BizBeginTime',
      bizEndTime: 'BizEndTime',
      endBizDate: 'EndBizDate',
      excludeNodeIds: 'ExcludeNodeIds',
      includeNodeIds: 'IncludeNodeIds',
      name: 'Name',
      nodeParams: 'NodeParams',
      parallelism: 'Parallelism',
      projectEnv: 'ProjectEnv',
      rootNodeId: 'RootNodeId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizBeginTime: 'string',
      bizEndTime: 'string',
      endBizDate: 'string',
      excludeNodeIds: 'string',
      includeNodeIds: 'string',
      name: 'string',
      nodeParams: 'string',
      parallelism: 'boolean',
      projectEnv: 'string',
      rootNodeId: 'number',
      startBizDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

