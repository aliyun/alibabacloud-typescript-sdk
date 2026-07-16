// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleMetadataResponseBodyDatasChildren extends $dara.Model {
  /**
   * @remarks
   * The human-readable content.
   * 
   * @example
   * 北京市
   */
  text?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * CN-BJ
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
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

export class DescribeRuleMetadataResponseBodyDatas extends $dara.Model {
  /**
   * @remarks
   * The subset of metadata.
   */
  children?: DescribeRuleMetadataResponseBodyDatasChildren[];
  /**
   * @remarks
   * The human-readable content.
   * 
   * @example
   * 中国
   */
  text?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * CN
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': DescribeRuleMetadataResponseBodyDatasChildren },
      text: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of metadata.
   */
  datas?: DescribeRuleMetadataResponseBodyDatas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6947DF8-7AC0-50D0-BADA-177646ABB85A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: { 'type': 'array', 'itemType': DescribeRuleMetadataResponseBodyDatas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datas)) {
      $dara.Model.validateArray(this.datas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

