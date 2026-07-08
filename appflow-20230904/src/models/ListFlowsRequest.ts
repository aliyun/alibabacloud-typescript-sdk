// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field.
   * 
   * @example
   * FlowId\\FlowName
   */
  name?: string;
  /**
   * @remarks
   * The filter values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can filter the cluster list by tag. You can specify up to 20 tag pairs. The numeric value n for each tag pair must be unique and must be a consecutive integer starting from 1. The value of Tag.N.Key corresponds to Tag.N.Value.
   * 
   * > The tag key can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * CreateBy
   */
  key?: string;
  /**
   * @remarks
   * The authentication content.
   * 
   * @example
   * zhangsan
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

export class ListFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: ListFlowsRequestFilter[];
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * AAAAAVY3rYiv9VoUJQSiCitgjgTlo5Q2D1qyq9rPPhxWJPl6j8bgHiGAwZWnCMJPepC+WRjTa7fpTA0Diy2AQ4aWoPY=
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies the object tags to which the rule applies. You can specify multiple tags.
   */
  tag?: ListFlowsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListFlowsRequestFilter },
      maxResults: 'string',
      nextToken: 'string',
      tag: { 'type': 'array', 'itemType': ListFlowsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

