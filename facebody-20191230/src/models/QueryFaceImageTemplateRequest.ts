// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceImageTemplateRequest extends $dara.Model {
  pageNo?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 6cd509ea-54fa-4730-8e9d-c94cadcda048
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

