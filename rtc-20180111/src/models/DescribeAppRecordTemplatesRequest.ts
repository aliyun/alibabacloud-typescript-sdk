// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppRecordTemplatesRequestCondition extends $dara.Model {
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * ac7N****
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

export class DescribeAppRecordTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  condition?: DescribeAppRecordTemplatesRequestCondition;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      condition: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      condition: DescribeAppRecordTemplatesRequestCondition,
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

