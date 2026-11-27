// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppStreamingOutTemplatesRequestCondition extends $dara.Model {
  /**
   * @remarks
   * Template Name.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * Bj6D****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID, created and queried through the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  /**
   * @remarks
   * Search condition.
   */
  condition?: DescribeAppStreamingOutTemplatesRequestCondition;
  /**
   * @remarks
   * Page number. By default, page 1 is queried.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      condition: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      condition: DescribeAppStreamingOutTemplatesRequestCondition,
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

