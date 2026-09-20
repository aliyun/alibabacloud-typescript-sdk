// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDefaultTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console), go to the DataStudio page, click your username in the upper-right corner, and choose Menu > User Info to obtain the tenant ID.
   * 
   * You can also obtain the tenant ID from Data.TenantId in the response of the GetProject operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024102
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

