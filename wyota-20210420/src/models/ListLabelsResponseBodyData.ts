// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLabelsResponseBodyData extends $dara.Model {
  content?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  labelId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      labelId: 'LabelId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      labelId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

