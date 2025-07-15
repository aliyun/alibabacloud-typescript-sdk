// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 30e792398d6c4569b04c0e53a3494381
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the model.
   * 
   * @example
   * 123
   */
  modelId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * Test
   */
  modelName?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   */
  tag?: DescribeModelsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeModelsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

