// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStageModelsResponseBodyStageModelInfoList extends $dara.Model {
  /**
   * @example
   * 2025-08-13T01:54:03Z
   */
  createdTime?: string;
  /**
   * @example
   * Stage description
   */
  description?: string;
  /**
   * @example
   * 2024-12-10T00:01:09Z
   */
  modifiedTime?: string;
  stageAlias?: string;
  /**
   * @example
   * j3j435j23l4j23l55xxx
   */
  stageModelId?: string;
  /**
   * @example
   * PRE
   */
  stageName?: string;
  /**
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      stageAlias: 'StageAlias',
      stageModelId: 'StageModelId',
      stageName: 'StageName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      stageAlias: 'string',
      stageModelId: 'string',
      stageName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStageModelsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZxxx
   */
  requestId?: string;
  stageModelInfoList?: DescribeStageModelsResponseBodyStageModelInfoList[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stageModelInfoList: 'StageModelInfoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stageModelInfoList: { 'type': 'array', 'itemType': DescribeStageModelsResponseBodyStageModelInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stageModelInfoList)) {
      $dara.Model.validateArray(this.stageModelInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

