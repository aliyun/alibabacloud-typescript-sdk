// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceVideoTemplateRequest extends $dara.Model {
  pageNo?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 3bf2418c-7adf-4002-a9d6-2f7cf1889c0d
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
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

