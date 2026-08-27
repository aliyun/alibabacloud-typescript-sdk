// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceLinkedRoleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service name.
   * 
   * For more information, see the **Cloud service identity** column in [Cloud services that support service-linked roles](https://help.aliyun.com/document_detail/461722.html).
   * 
   * @example
   * polardb.aliyuncs.com
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

