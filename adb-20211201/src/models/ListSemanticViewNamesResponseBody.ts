// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSemanticViewNamesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The annotation of the semantic view.
   * 
   * @example
   * 这是一个定义销售额相关指标的视图
   */
  comment?: string;
  /**
   * @remarks
   * The name of the semantic view.
   * 
   * @example
   * revenue_analysis
   */
  viewName?: string;
  /**
   * @remarks
   * The schema in which the semantic view resides.
   * 
   * @example
   * sales_db
   */
  viewSchema?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      viewName: 'ViewName',
      viewSchema: 'ViewSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      viewName: 'string',
      viewSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSemanticViewNamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result data.
   */
  data?: ListSemanticViewNamesResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSemanticViewNamesResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

