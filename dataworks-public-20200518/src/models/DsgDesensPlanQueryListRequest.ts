// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanQueryListRequest extends $dara.Model {
  /**
   * @remarks
   * The owner of the data masking rule.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the sensitive field.
   * 
   * @example
   * phone
   */
  ruleName?: string;
  /**
   * @remarks
   * The ID of the level-2 data masking scenario. You can call the [DsgSceneQuerySceneListByName](https://help.aliyun.com/document_detail/2786322.html) operation to query the list of IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  sceneId?: number;
  /**
   * @remarks
   * The status of the data masking rule. Valid values:
   * 
   * *   0: expired
   * *   1: effective
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleName: 'string',
      sceneId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

