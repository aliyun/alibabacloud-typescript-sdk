// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubtaskItemDetailAnnotations extends $dara.Model {
  /**
   * @remarks
   * Abandon mark
   * 
   * @example
   * False
   */
  abandonFlag?: boolean;
  /**
   * @remarks
   * Abandonment remark
   * 
   * @example
   * 原始数据错误
   */
  abandonRemark?: string;
  /**
   * @remarks
   * Date ID
   * 
   * @example
   * 1957578084
   */
  dataId?: string;
  /**
   * @remarks
   * Feedback mark
   * 
   * @example
   * False
   */
  feedbackFlag?: boolean;
  /**
   * @remarks
   * Validation feedback
   * 
   * @example
   * 验收成功/所有投票结果都未被采纳
   */
  feedbackRemark?: string;
  /**
   * @remarks
   * Failure mark
   * 
   * @example
   * False
   */
  fixedFlag?: boolean;
  /**
   * @remarks
   * Is assigned to me
   * 
   * @example
   * 0
   */
  mine?: number;
  /**
   * @remarks
   * Skip mark
   * 
   * @example
   * False
   */
  rejectFlag?: boolean;
  /**
   * @remarks
   * Status
   * 
   * @example
   * HANDLING
   */
  state?: string;
  /**
   * @remarks
   * weight
   * 
   * @example
   * 311011
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      abandonFlag: 'AbandonFlag',
      abandonRemark: 'AbandonRemark',
      dataId: 'DataId',
      feedbackFlag: 'FeedbackFlag',
      feedbackRemark: 'FeedbackRemark',
      fixedFlag: 'FixedFlag',
      mine: 'Mine',
      rejectFlag: 'RejectFlag',
      state: 'State',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonFlag: 'boolean',
      abandonRemark: 'string',
      dataId: 'string',
      feedbackFlag: 'boolean',
      feedbackRemark: 'string',
      fixedFlag: 'boolean',
      mine: 'number',
      rejectFlag: 'boolean',
      state: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtaskItemDetail extends $dara.Model {
  /**
   * @remarks
   * List of annotation results
   */
  annotations?: SubtaskItemDetailAnnotations[];
  /**
   * @remarks
   * data source
   * 
   * @example
   * None
   */
  dataSource?: { [key: string]: any };
  /**
   * @remarks
   * Item ID
   * 
   * @example
   * 1500***47176994816
   */
  itemId?: number;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      dataSource: 'DataSource',
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': SubtaskItemDetailAnnotations },
      dataSource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.dataSource) {
      $dara.Model.validateMap(this.dataSource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

