// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateRecord extends $dara.Model {
  bizId?: string;
  copyStatus?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtModified?: string;
  id?: number;
  templateId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      copyStatus: 'CopyStatus',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      templateId: 'TemplateId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      copyStatus: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      templateId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

